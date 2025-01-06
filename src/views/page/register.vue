<template>  
   <!-- **************** MAIN CONTENT START **************** -->
   <main>
    <!-- Container START -->
    <div class="container">
      <div class="row justify-content-center align-items-center vh-100 py-5">
        <!-- Main content START -->
        <div class="col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
          <!-- Sign in START -->
          <div class="card card-body text-center p-4 p-sm-5">
            <!-- Title -->
            <h1 class="mb-2">注册并登录</h1>
            <p class="mb-0">
              使用电话号码,<a href="sign-in.html">
                电话号码注册</a>
            </p>
            <!-- Form START 改form 为div 防止表单默认提交 -->
            <div class="mt-sm-4">
              <!-- Email -->
              <!-- <div class="mb-3 input-group-lg">
              <input type="email" class="form-control" placeholder="Enter email">
            </div> -->

            <div class="mb-3 input-group-lg">
              <input v-model="userAccount" type="text" class="form-control"  placeholder="设置不重复账号" />


            </div>


              <div class="mb-3 input-group-lg">
                <input v-model="password" type="password" class="form-control"  placeholder="输入密码" />


              </div>

              <div class="mb-3 input-group-lg">
                <input  v-model="passwordRepeat" type="password" class="form-control"  placeholder="再次输入密码" />


              </div>

          

          






          


              
         



            </div>
            <!-- Remember me -->
            <div class="mb-3 d-sm-flex justify-content-between">
              <div>
                <input type="checkbox" class="form-check-input" id="rememberCheck" />
                <label class="form-check-label" for="rememberCheck">记住我?</label>
              </div>
              <a href="forgot-password.html">忘记密码?</a>
            </div>
            <!-- Button 改submit为button 防止默认提交-->
            <div class="d-grid">
              <button type="button" @click="registerWithAccount" class="btn btn-lg btn-primary">
                注册并登录
              </button>
            </div>
            <!-- Copyright -->
            <p class="mb-0 mt-3">
              ©2022 <a href="http://wwww.kekechat.com/">kekechat.</a> All
              rights reserved
            </p>
          </div>
          <!-- Form END -->
        </div>
        <!-- Sign in START -->
      </div>
    </div>
    <!-- Row END -->
  
    <!-- Container END -->
  </main>
  <!-- **************** MAIN CONTENT END **************** -->





</template>  

<script>  





import '@/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js'
import '@/assets/vendor/tiny-slider/dist/tiny-slider.js'
import '@/assets/vendor/OverlayScrollbars-master/js/OverlayScrollbars.min.js'
import '@/assets/vendor/choices.js/public/assets/scripts/choices.min.js'
import '@/assets/vendor/glightbox-master/dist/js/glightbox.min.js'
import '@/assets/vendor/flatpickr/dist/flatpickr.min.js'
import '@/assets/vendor/plyr/plyr.js'
import '@/assets/js/functions.js'



import '@/assets/vendor/font-awesome/css/all.min.css'
import '@/assets/vendor/bootstrap-icons/bootstrap-icons.css'
import '@/assets/vendor/OverlayScrollbars-master/css/OverlayScrollbars.min.css'
import '@/assets/vendor/tiny-slider/dist/tiny-slider.css'
import '@/assets/vendor/choices.js/public/assets/styles/choices.min.css'
import '@/assets/vendor/glightbox-master/dist/css/glightbox.min.css'
import '@/assets/vendor/dropzone/dist/dropzone.css'
import '@/assets/vendor/flatpickr/dist/flatpickr.css'
import '@/assets/vendor/plyr/plyr.css'
import '@/assets/css/style.css'
import '@/assets/css/sign-in.css'


import { default as axios } from '@/utils/request';  


export default {  
  data() {  
    return {  
      userAccount: null,
          password: null,
          passwordRepeat: null,
    };  
  },  
  methods: {  
    

    registerWithAccount() {

if (this.password != this.passwordRepeat ) {
  alert("2次输入密码不同");
  return null;
}

axios
  .post("/user/LoginRegister/registerWithAccount", {
    userAccount: this.userAccount,
    password: this.password, //验证码作为密码传给后端

  })
  .then(function (response) {
    var data = response.data;

    if (data.code == 201) {

     

      ElementPlus.ElMessage.success("注册失败,可能存在该用户id");

      return ;
    }

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

    ElementPlus.ElMessage.success("您注册成功");

   
  })
  .catch(function (error) {
    console.log(error);
  });
},



  },  
};  
</script>  

<style scoped>  
 
</style>