//统一管理咱们项目用户相关的接口
import request from '@/utils/request'




//退出登录
export const reqLogout = () => request.post<any, any>(API.LOGOUT_URL)

