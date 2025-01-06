//进行axios二次封装:使用请求与响应拦截器
import axios from "axios";


// 全局设置 axios 发送请求带上cookie
axios.defaults.withCredentials = true


import { ElMessage } from "element-plus";
//引入用户相关的仓库
import useUserStore from "@/store/modules/user";
//第一步:利用axios对象的create方法,去创建axios实例(其他的配置:基础路径、超时的时间)
let request = axios.create({
     //基础路径
    baseURL: '/api',
     timeout: 3000 //超时的时间的设置
});
//第二步:request实例添加请求与响应拦截器
request.interceptors.request.use((config) => {
     //获取用户相关的小仓库:获取仓库内部token,登录成功以后携带给服务器
     let userStore = useUserStore();
     if (userStore.token) {
          config.headers.token = userStore.token
     }
     //config配置对象,headers属性请求头,经常给服务器端携带公共参数
     //返回配置对象
     return config;
});

//第三步:响应拦截器
request.interceptors.response.use((response) => {
 

     let message = '';
     //http状态码
     let status = response.data.code;
    
     
     switch (status) {
          case 1001:
               message = "您没有登录";
               ElMessage({
                    type: 'error',
                    message
               });
          

               break;
       
          default:
               message = "网络出现问题";
               break;
     }

   

     return response;
}, (error) => {
     //失败回调:处理http网络错误的
     //定义一个变量:存储网络错误信息
     let message = '';
     //http状态码
     let status = error.response.data.code;
     switch (status) {
          case 1001:
               message = "您没有登录"
               break;
          case 401:
               message = "TOKEN过期"
               break;
          case 403:
               message = "无权访问"
               break;
          case 404:
               message = "请求地址错误";
               break;
          case 500:
               message = "服务器出现问题"
               break;
          default:
               message = "网络出现问题";
               break;
     }
    // 提示错误信息
     ElMessage({
          type: 'error',
          message
     });
     return Promise.reject(error);
});
//对外暴露
export default request;