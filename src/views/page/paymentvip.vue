<template>

  <body>



    <Header></Header>








    <!-- **************** MAIN CONTENT START **************** -->
    <main>
      <!-- Container START  class="row g-4" -->
      <div class="container">




        <!-- 会员弹窗 -->
        <div class=" " id="vipPayModal" tabindex="-1" aria-labelledby="exampleModalLabel">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title mx-auto" id="exampleModalLabel">会员获取永久专属账号</h5>

              </div>
              <div class="modal-body">


                <div class=" w-400px my-3 m-auto ">
                  <h5 class=" ">选择靓号
                  </h5>


                  <select v-model="selectedVipNum" class="form-select form-select-sm  mt-1 "
                    aria-label=".form-select-sm example">
                    <option v-for="option in VipNumList" :value="option.vipUser" :key="option.id">{{ option.vipUser }}
                    </option>
                  </select>







                </div>





                <div class=" w-400px my-3 m-auto ">

                  <h5 class=" ">输入自定义账号
                  </h5>
                  <input v-model="selectedVipNum" type="text" class="form-control form-control-sm mt-1"
                    placeholder="自选账号">
                </div>







                <img src="@/assets/images/payment/wxpay2.jpg" class="mx-auto d-block" style="width:200px">

              </div>
              <div class="modal-footer">
                <button type="button" @click="gotopage('/')" class="btn btn-secondary">不需要会员</button>
                <button type="button" @click="paymentForVip" class="btn btn-primary">充值完成</button>
              </div>
            </div>
          </div>
        </div>





      </div>
      <!-- Container END -->
    </main>
    <!-- **************** MAIN CONTENT END **************** -->
















  </body>


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
// import '@/assets/js/vue.global.min.js'
// import '@/assets/js/axios.min.js'




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




import { default as axios } from '@/utils/request';
import Header from './Header.vue';
import { ElMessage } from 'element-plus';





export default {
  components: {
    Header
  },

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
      recommendUser: {},//推荐用户列表数据


    };
  },
  methods: {
    gotopage(path) {

      this.$router.push(path)
    },


    checkLoginStatus() {
      let cookies = document.cookie.split(';');
      let userInfoCookieExists = false;
      let userInfoValue = '';

      for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf('userInfo=') === 0) {
          userInfoCookieExists = true;
          userInfoValue = cookie.substring('userInfo='.length);
          break;
        }
      }

      if (!userInfoCookieExists || userInfoValue === 'signout') {
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
          "/user/LoginRegister/loginWithAccount",
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

          ElMessage.success("成功登录");
        })
        .catch(function (error) {
          console.log(error);
        });
    },





    paymentForVip() {
      axios.defaults.withCredentials = true;
      axios
        .post(
          "/video/paymentAction/paymentForVip",
          {
            selectedVipNum: this.selectedVipNum,
          },

          {
            withCredentials: true,
          }
        )
        .then((response) => {

       

          ElMessage({
            type: 'success',
            message: '充值完成,正在跳转'
          });




          //设置为已经是vip用户
          var d = new Date();
          d.setTime(d.getTime() + 3000 * 24 * 60 * 60 * 1000); // 3000 days later
          var expires = "expires=" + d.toUTCString();
          document.cookie = "payUser=" + "payUserTemp" + "; " + expires + "; domain=.kekechat.com; path=/";





          this.loginWithAccount(
            this.selectedVipNum,
            this.selectedVipNum + "123"
          );

          var hasUserinfoCookie = this.checkLoginStatus();

          if (hasUserinfoCookie) {
            ElMessage.success("为你切换为会员账号");
            alert(
              "账号为" +
              this.selectedVipNum +
              "123" +
              "  密码为" +
              this.selectedVipNum +
              "123"
            );
          } else {

            ElMessage.success("正在登录为新的会员账号");
            alert(
              "账号为" +
              this.selectedVipNum +
              "  密码为" +
              this.selectedVipNum +
              " + " +
              "123"
            );
          }

  


        })
        .catch((error) => {
          alert(error);
        });
    },

    getUserMembersList() {
      axios.defaults.withCredentials = true;
      axios
        .post(
          "/user/userMembers/getUserMembersList",
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
          ElMessage.error(error);
          alert(error);
        });
    },

    getLoginUserInfo() {
      var hasUserinfoCookie = this.checkLoginStatus()

      if (hasUserinfoCookie) {
        axios.defaults.withCredentials = true;
        axios
          .post(
            "/user/userInfo/getLoginUserInfo",
            {},

            {
              withCredentials: true,
            }
          )
          .then((response) => {
            var data = response.data;

            //如果不是正确token  返回null 会报错
            if (data.data == null) {
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
</script>

<style scoped></style>