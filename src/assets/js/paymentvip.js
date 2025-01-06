const app = {
  data() {
    return {
      phone: null,
      phonecode: null,
      videoList: [],
      comment: "",
      userId: "",
      contentId: null,
      videoIdList: [],
      commentPage: 1,
      commentList: [],
      fileInfoList: [],
      displayStatus: [],
      videoPage: 0, //视频内容页数 默认1
      searchTerm: null,
      searchTermPage: 1,
      selectedVipNum: null, // 选择的号码 和 渲染select默认选择号码
      VipNumList: null,
      loginUserInfo: {},
      recommendUser:{},//推荐用户列表数据
    };
  },
  methods: {
     checkLoginStatus() {
      let cookies = document.cookie.split(';');
      let userInfoCookieExists = false;
      let userInfoValue = '';
  
      for(let i = 0; i < cookies.length; i++) {
          let cookie = cookies[i].trim();
          if(cookie.indexOf('userInfo=') === 0) {
              userInfoCookieExists = true;
              userInfoValue = cookie.substring('userInfo='.length);
              break;
          }
      }
  
      if(!userInfoCookieExists || userInfoValue === 'signout') {
          return false; // 用户没有登录
      } else {
          return true; // 用户登录
      }
  },
  

    signOut() {

      function setCookie(name, value) {
        document.cookie = name + '=' + value + '; domain=.kekechat.com; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT';
    }
    
    setCookie('userInfo', 'signout');


      window.location.href = "/";
    },

    loginWithAccount(userAccount, password) {
      axios
        .post(
          "http://service.kekechat.com/api/user/LoginRegister/loginWithAccount",
          {
            userAccount: userAccount,
            password: password, //验证码作为密码传给后端
          }
        )
        .then(function (response) {
          var data = response.data;

          var token = data.data;
          //设置cookie
          //document.cookie = "userInfo="+token;

          // 设置一个名为 "username" 的 cookie，过期时间为一周后
          var d = new Date();
          d.setTime(d.getTime() + 3000 * 24 * 60 * 60 * 1000); // 3000 days later
          var expires = "expires=" + d.toUTCString();
          document.cookie = "userInfo=" + token + "; " + expires + "; domain=.kekechat.com; path=/";

          //返回上一级
          window.history.back();

          // window.location.href="http://127.0.0.1/";

          data = JSON.stringify(data);

          const message = ElementPlus.ElMessage.success("成功登录");
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    
 


    
    paymentForVip() {
      axios.defaults.withCredentials = true;
      axios
        .post(
          "http://service.kekechat.com/api/video/paymentAction/paymentForVip",
          {
            selectedVipNum: this.selectedVipNum,
          },

          {
            withCredentials: true,
          }
        )
        .then((response) => {
          const message = ElementPlus.ElMessage.success("充值完成,正在跳转");

       

          this.loginWithAccount(
            this.selectedVipNum,
            this.selectedVipNum + "123"
          );

          var hasUserinfoCookie = this.checkLoginStatus();

          if (hasUserinfoCookie) {
            const message = ElementPlus.ElMessage.success("为你切换为会员账号");
            alert(
              "账号为" +
                this.selectedVipNum +
                "123" +
                "  密码为" +
                this.selectedVipNum +
                "123"
            );
          } else {
            const message =
              ElementPlus.ElMessage.success("正在登录为新的会员账号");
            alert(
              "账号为" +
                this.selectedVipNum +
                "  密码为" +
                this.selectedVipNum +
                " + " +
                "123"
            );
          }

          // 相对路径方式跳转到网站首页  
            window.location.href = "/";  

        })
        .catch((error) => {
          alert("出现错误");
        });
    },

    getUserMembersList() {
      axios.defaults.withCredentials = true;
      axios
        .post(
          "http://service.kekechat.com/api/user/userMembers/getUserMembersList",
          {},

          {
            withCredentials: true,
          }
        )
        .then((response) => {
          var data = response.data;
          this.VipNumList = data.data;

          this.selectedVipNum = this.VipNumList[0].vipUser;
        })
        .catch((error) => {
          // const message = ElementPlus.ElMessage.error(error);
          alert(error);
        });
    },

    getLoginUserInfo() {
      var hasUserinfoCookie = this.checkLoginStatus()

      if (hasUserinfoCookie) {
        axios.defaults.withCredentials = true;
        axios
          .post(
            "http://service.kekechat.com/api/user/userInfo/getLoginUserInfo",
            {},

            {
              withCredentials: true,
            }
          )
          .then((response) => {
            var data = response.data;

            //如果不是正确token  返回null 会报错
            if(data.data == null){
              this.loginUserInfo.nickname = "默认新用户名";
              this.loginUserInfo.portraitImage = "defaultouxiang.jpg";
              return;
            }

            this.loginUserInfo = data.data;
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        this.loginUserInfo.nickname = "默认新用户名";
        this.loginUserInfo.portraitImage = "defaultouxiang.jpg";
      }
    },

 
  



  },

  mounted() {
 
    this.getLoginUserInfo();
    this.getUserMembersList();
   

  
  },

  updated() {
   
   
  },
};

const vm = Vue.createApp(app).mount("#app");



function checkLogin() {
  let cookies = document.cookie.split(';');
  let userInfoCookieExists = false;
  let userInfoValue = '';

  for(let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      if(cookie.indexOf('userInfo=') === 0) {
          userInfoCookieExists = true;
          userInfoValue = cookie.substring('userInfo='.length);
          break;
      }
  }

  if(!userInfoCookieExists || userInfoValue === 'signout') {
      return false; // 用户登录
  } else {
      return true; // 用户没有登录
  }
}

//检查是否有登录cookie,没有登录,就展示登录button
function checkloginstatus() {


  var hasUserinfoCookie = checkLogin();

  if (hasUserinfoCookie) {
    console.log('Cookie "userInfo" 存在');

    document.getElementById("nologinStatusNav").style.display = "none";
  } else {
    console.log('Cookie "userInfo" 不存在');

    const message = ElementPlus.ElMessage.success("还没有登录,请登录");

    document.getElementById("loginStatusNav").style.display = "none";
  }
}



