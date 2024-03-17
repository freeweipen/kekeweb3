<template>
  <main>
    <!-- Container START -->
    <div class="container">
      <div class="row justify-content-center align-items-center vh-100 py-5">
        <!-- Main content START -->
        <div class="col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
          <!-- Sign in START -->
          <div class="card card-body text-center p-4 p-sm-5">
            <!-- Title -->
            <h1 class="mb-2">登录</h1>
            <p class="mb-0">
              还没有账号?<a href="sign-up.html">
                点击这里注册</a>
            </p>
            <!-- Form START 改form 为div 防止表单默认提交 -->
            <div class="mt-sm-4">
              <!-- Email -->
              <!-- <div class="mb-3 input-group-lg">
              <input type="email" class="form-control" placeholder="Enter email">
            </div> -->

              <!-- 电话 -->
              <div class="mb-3 input-group-lg">
                <input type="text" class="form-control" v-model="phone" placeholder="电话号码" />


              </div>

              <!-- TODO: 添加button 的hover 样式 -->

              <div class="mb-3 input-group-md sendcode-custom">
                <button type="button" class="btn btn-primary-soft btn-md " @click="sendPhoneCode">
                  发送验证码
                </button>


              </div>






              <!-- New password -->
              <!-- 删除class position-relative -->

              <div class="mb-3 ">
                <!-- Password -->
                <div class="input-group input-group-lg">
                  <!-- <input class="form-control fakepassword" type="password" id="psw-input" placeholder="Enter new password"> -->

                  <input class="form-control fakepassword" v-model="phonecode" type="text" id="psw-input"
                    placeholder="输入验证码" />
                  <span class="input-group-text p-0">
                    <i class="fakepasswordicon fa-solid fa-eye-slash cursor-pointer p-2 w-40px"></i>
                  </span>
                </div>





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
              <button type="button" @click="registerAndLoginWithCode" class="btn btn-lg btn-primary">
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
   
  </main>
</template>

<script>



import '@/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js'
import '@/assets/vendor/tiny-slider/dist/tiny-slider.js'
import '@/assets/vendor/OverlayScrollbars-master/js/OverlayScrollbars.min.js'
import '@/assets/vendor/choices.js/public/assets/scripts/choices.min.js'
import '@/assets/vendor/glightbox-master/dist/js/glightbox.min.js'
import '@/assets/vendor/flatpickr/dist/flatpickr.min.js'
import '@/assets/vendor/plyr/plyr.js'

import '@/assets/js/vue.global.min.js'
import '@/assets/js/axios.min.js'




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
import '@/assets/css/mycustom.css'


export default {


  
 
      data() {
        return {
          phone: null,
          phonecode: null,

        };
      },
      methods: {



        registerAndLoginWithCode() {

          axios
            .post("http://127.0.0.1/api/user/LoginRegister/registerAndLoginWithCode", {
              phone: this.phone,
              password: this.phonecode, //验证码作为密码传给后端

            })
            .then(function (response) {
              var data = response.data;

              var token = data.data;
              //设置cookie
              //document.cookie = "userInfo="+token;


              // 设置一个名为 "username" 的 cookie，过期时间为一周后
              var d = new Date();
              d.setTime(d.getTime() + (3000 * 24 * 60 * 60 * 1000)); // 3000天后
              var expires = "expires=" + d.toUTCString();
              document.cookie = "userInfo=" + token + ";" + expires + ";path=/";



              //返回上一级
              window.history.back();

              // window.location.href="http://127.0.0.1/";

              data = JSON.stringify(data);

              alert(data);
            })
            .catch(function (error) {
              console.log(error);
            });
        },



        sendPhoneCode() {

          axios
            .post("http://127.0.0.1/api/user/LoginRegister/sendPhoneCode", {
              phone: this.phone,

            })
            .then(function (response) {
              var data = response.data;




            })
            .catch(function (error) {
              console.log(error);
            });
        },



      },
    
}
</script>

<style scoped>

</style>



