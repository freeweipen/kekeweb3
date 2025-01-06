<template>




  <header class="navbar-light fixed-top header-static bg-mode">

    <!-- Logo Nav START -->
    <nav class="navbar navbar-expand-sm">
      <div class="container">
        <!-- Logo START -->
        <a class="navbar-brand" href="index.html">
          <img class="light-mode-item navbar-brand-item rounded-1" src="@/assets/images/logo3.png" alt="logo"
            style="height: 40px" />

          <!-- <img class="light-mode-item navbar-brand-item" src="@/assets/images/logo.svg" alt="logo" />
        <img class="dark-mode-item navbar-brand-item" src="@/assets/images/logo.svg" alt="logo" /> -->
        </a>
        <!-- Logo END -->

        <!-- Responsive navbar toggler -->
        <button class="navbar-toggler ms-auto icon-md btn btn-light p-0" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-animation">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <!-- Main navbar START -->
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <!-- Nav Search START -->
          <div class="nav mt-3 mt-lg-0 flex-nowrap align-items-center px-4 px-lg-0">
            <div class="nav-item w-300px">
              <form class="rounded position-relative" @submit.prevent="searchContent">
                <input class="form-control ps-5 bg-light" v-model="searchTerm" type="search" placeholder="搜索内容..."
                  aria-label="Search" />
                <button class="btn bg-transparent px-2 py-0 position-absolute top-50 start-0 translate-middle-y"
                  @click="searchContent" type="submit">
                  <i class="bi bi-search fs-5"> </i>
                </button>
              </form>
            </div>
          </div>
          <!-- Nav Search END -->

          <ul class="navbar-nav navbar-nav-scroll ms-auto">



            <!-- Nav item 1 Demos -->
            <li class="nav-item dropdown">
              <a class="nav-link  " href="#" id="homeMenu" data-bs-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false">上传视频</a>

            </li>

            <li class="nav-item dropdown">
              <a class="nav-link  " @click="gotopage('paymentvip')" id="homeMenu">会员充值</a>

            </li>








          </ul>
        </div>
        <!-- Main navbar END -->

        <!-- Nav right START -->
        <ul id="loginStatusNav" class="nav flex-nowrap align-items-center ms-sm-3 list-unstyled">
          <li class="nav-item ms-2">
            <a class="nav-link icon-md btn btn-light p-0" href="messaging.html">
              <i class="bi bi-chat-left-text-fill fs-6"> </i>
            </a>
          </li>
          <li class="nav-item ms-2">
            <a class="nav-link icon-md btn btn-light p-0" href="settings.html">
              <i class="bi bi-gear-fill fs-6"> </i>
            </a>
          </li>
          <li class="nav-item dropdown ms-2">
            <a class="nav-link icon-md btn btn-light p-0" href="#" id="notifDropdown" role="button"
              data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
              <span class="badge-notif animation-blink"></span>
              <i class="bi bi-bell-fill fs-6"> </i>
            </a>
            <div class="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md p-0 shadow-lg border-0"
              aria-labelledby="notifDropdown">
              <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                  <h6 class="m-0">
                    Notifications
                    <span class="badge bg-danger bg-opacity-10 text-danger ms-2">4 new</span>
                  </h6>
                  <a class="small" href="#">Clear all</a>
                </div>
                <div class="card-body p-0">
                  <ul class="list-group list-group-flush list-unstyled p-2">
                    <!-- Notif item -->
                    <li>
                      <div class="list-group-item list-group-item-action rounded badge-unread d-flex border-0 mb-1 p-3">
                        <div class="avatar text-center d-none d-sm-inline-block">
                          <img class="avatar-img rounded-circle" src="@/assets/images/avatar/01.jpg" alt="" />
                        </div>
                        <div class="ms-sm-3">
                          <div class="d-flex">
                            <p class="small mb-2">
                              <b>Judy Nguyen</b> sent you a friend request.
                            </p>
                            <p class="small ms-3 text-nowrap">Just now</p>
                          </div>
                          <div class="d-flex">
                            <button class="btn btn-sm py-1 btn-primary me-2">
                              Accept
                            </button>
                            <button class="btn btn-sm py-1 btn-danger-soft">
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                    <!-- Notif item -->
                    <li>
                      <div
                        class="list-group-item list-group-item-action rounded badge-unread d-flex border-0 mb-1 p-3 position-relative">
                        <div class="avatar text-center d-none d-sm-inline-block">
                          <img class="avatar-img rounded-circle" src="@/assets/images/avatar/02.jpg" alt="" />
                        </div>
                        <div class="ms-sm-3 d-flex">
                          <div>
                            <p class="small mb-2">
                              Wish <b>Amanda Reed</b> a happy birthday (Nov
                              12)
                            </p>
                            <button class="btn btn-sm btn-outline-light py-1 me-2">
                              Say happy birthday 🎂
                            </button>
                          </div>
                          <p class="small ms-3">2min</p>
                        </div>
                      </div>
                    </li>
                    <!-- Notif item -->
                    <li>
                      <a href="#" class="list-group-item list-group-item-action rounded d-flex border-0 mb-1 p-3">
                        <div class="avatar text-center d-none d-sm-inline-block">
                          <div class="avatar-img rounded-circle bg-success">
                            <span
                              class="text-white position-absolute top-50 start-50 translate-middle fw-bold">WB</span>
                          </div>
                        </div>
                        <div class="ms-sm-3">
                          <div class="d-flex">
                            <p class="small mb-2">
                              Webestica has 15 like and 1 new activity
                            </p>
                            <p class="small ms-3">1hr</p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <!-- Notif item -->
                    <li>
                      <a href="#" class="list-group-item list-group-item-action rounded d-flex border-0 p-3 mb-1">
                        <div class="avatar text-center d-none d-sm-inline-block">
                          <img class="avatar-img rounded-circle" src="@/assets/images/logo/12.svg" alt="" />
                        </div>
                        <div class="ms-sm-3 d-flex">
                          <p class="small mb-2">
                            <b>Bootstrap in the news:</b> The search giant’s
                            parent company, Alphabet, just joined an
                            exclusive club of tech stocks.
                          </p>
                          <p class="small ms-3">4hr</p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="card-footer text-center">
                  <a href="#" class="btn btn-sm btn-primary-soft">See all incoming activity</a>
                </div>
              </div>
            </div>
          </li>
          <!-- Notification dropdown END -->

          <li class="nav-item ms-2 dropdown">
            <a class="nav-link btn icon-md p-0" href="#" id="profileDropdown" role="button" data-bs-auto-close="outside"
              data-bs-display="static" data-bs-toggle="dropdown" aria-expanded="false">
              <img class="avatar-img rounded-2"
                v-bind:src="'https://springbootacc.oss-cn-chengdu.aliyuncs.com/touxiang/' + loginUserInfo.portraitImage"
                alt="" />
            </a>
            <ul class="dropdown-menu dropdown-animation dropdown-menu-end pt-3 small me-md-n3"
              aria-labelledby="profileDropdown">
              <!-- Profile info -->
              <li class="px-3">
                <div class="d-flex align-items-center position-relative">
                  <!-- Avatar -->
                  <div class="avatar me-3">
                    <img class="avatar-img rounded-circle"
                      v-bind:src="'https://springbootacc.oss-cn-chengdu.aliyuncs.com/touxiang/' + loginUserInfo.portraitImage"
                      alt="avatar" />
                  </div>
                  <div>
                    <a class="h6 stretched-link" href="#">{{ loginUserInfo.nickname }}</a>
                    <p class="small m-0">{{ loginUserInfo.userId }}</p>
                  </div>
                </div>
                <a class="dropdown-item btn btn-primary-soft btn-sm my-2 text-center" href="my-profile.html">查看主页</a>
              </li>
              <!-- Links -->
              <li>
                <a class="dropdown-item" href="settings.html"><i class="bi bi-gear fa-fw me-2"></i>设置
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="http://www.bootstrapmb.com">
                  <i class="fa-fw bi bi-life-preserver me-2"></i>支持
                </a>
              </li>

              <li class="dropdown-divider"></li>
              <li>
                <a @click="signOut" class="dropdown-item bg-danger-soft-hover"><i
                    class="bi bi-power fa-fw me-2"></i>退出</a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>

            </ul>
          </li>
          <!-- Profile START -->
        </ul>
        <!-- Nav right END -->

        <!-- Nav right START 没有登录样式 -->
        <ul id="nologinStatusNav" class="nav flex-nowrap align-items-center ms-sm-3 list-unstyled">
          <li class="nav-item ms-2">
            <a class="btn btn-primary-soft btn-sm my-2 text-center" @click="gotopage('login')">登录</a>
          </li>

          <li class="nav-item ms-2">
            <a class="btn btn-primary-soft btn-sm my-2 text-center" @click="gotopage('register')">注册</a>
          </li>

        </ul>
        <!-- Nav right END 没有登录样式-->
      </div>
    </nav>
    <!-- Logo Nav END -->
  </header>






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
import '@/assets/css/mycustom.css'


import { default as axios } from '@/utils/request';
import { ElMessage } from 'element-plus';  

export default {


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

    searchContent(event) {
      event.preventDefault(); // 阻止默认提交行为

      axios.defaults.withCredentials = true;
      axios
        .post(
          "/video/videoList/searchContent",
          {
            searchTermPage: this.searchTermPage,
            searchTerm: this.searchTerm,
          },

          {
            withCredentials: true,
          }
        )
        .then((response) => {
          var data = response.data;
          //下次拉取数据 page 增加1
          this.searchTermPage = this.searchTermPage + 1;
          //如果之前看过视频，需要置空
          this.videoList = null;
          this.videoIdList = null;
          if (this.videoList != null) {
            this.videoList = this.videoList.concat(data.data);
          }

          this.videoList = data.data;
          console.log("sssssssssscc" + this.videoIdList);

          var variableArray = this.videoList;

          var myArray = [];
          for (var i = 0; i < variableArray.length; i++) {
            var list = variableArray[i];
            myArray.push(list.id);
          }

          this.videoIdList = myArray;
        })
        .catch((error) => {
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
          ElMessage.success("充值完成,正在跳转");

          // 获取modal框的实例
          var modal = new bootstrap.Modal(
            document.getElementById("vipPayModal")
          );
          // 打开modal框
          modal.hide();

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
          alert("出现错误");
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

    //检查是否有登录cookie,没有登录,就展示登录button
    autoPlayVideo() {
      //视频滑动到中间时候自动播放

      const videos = document.querySelectorAll(".video");
      const videoContainers = document.querySelectorAll(".video-container");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const video = entry.target.querySelector("video");
            if (entry.isIntersecting) {
              // 暂停其他视频
              videos.forEach((v) => {
                if (v !== video) {
                  v.pause();
                }
              });
              // 播放当前视频
              video.play();
            } else {
              video.pause();
            }
          });
        },
        { threshold: 0.5 }
      );

      videoContainers.forEach((videoContainer) => {
        observer.observe(videoContainer);

        console.log("rrrrrrrrr");
      });
    },

    autoPlayVideo2() {
      const videos = document.querySelectorAll("video");

      function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
        );
      }

      function handleScroll() {
        videos.forEach((video) => {
          if (isElementInViewport(video)) {
            video.play();
          } else {
            video.pause();
          }
        });
      }

      window.addEventListener("scroll", handleScroll);
    },

    //选择文件的时候 ，删除不想上传的文件
    deleteFileItem(name) {
      // this.fileInfoList.splice(index, 1);

      for (let index = 0; index < this.fileInfoList.length; index++) {
        if (this.fileInfoList[index].name === name) {
          this.fileInfoList.splice(index, 1);
        }
      }
    },

    computedDayNum(data) {
      // 将日期字符串转换为Date对象
      var givenDate = new Date(data);

      // 当前日期
      var currentDate = new Date();

      // 将两个日期转换为时间戳，并计算它们之间的毫秒数差异
      var timeDiff = currentDate.getTime() - givenDate.getTime();
      // console.log(timeDiff);
      // 将毫秒数差异转换为天数
      return Math.floor(timeDiff / (1000 * 3600 * 24));
    },

    showVipPaymentModal() {
      setTimeout(function () {

        //如果展示一次弹窗，就不再展示
        const cookies = document.cookie.split("; ");
        let vipShowStatus = false;

        cookies.forEach((cookie) => {
          const [name, value] = cookie.split("=");
          if (name.trim() === "vipShowStatus" && value === "1") {
            vipShowStatus = true;
          }
        });



        if (vipShowStatus) {
          return;
        }



        var d = new Date();
        d.setTime(d.getTime() + 3 * 24 * 60 * 60 * 1000); // 3000 days later
        var expires = "expires=" + d.toUTCString();
        document.cookie = "vipShowStatus=" + "1" + "; " + expires + "; domain=.kekechat.com; path=/";



        // 获取modal框的实例
        var modal = new bootstrap.Modal(document.getElementById("vipPayModal"));
        // 打开modal框
        modal.show();

        vm.getUserMembersList();

        var hasUserinfoCookie = this.checkLoginStatus()

        if (hasUserinfoCookie) {
          document.getElementById("exampleModalLabel").innerHTML =
            "切换成会员账号";
        } else {
          document.getElementById("exampleModalLabel").innerHTML =
            "注册成会员账号";
        }
      }, 10000);


    },

    checkLogin() {
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
        return false; // 用户登录
      } else {
        return true; // 用户没有登录
      }
    },


    
    //检查是否有登录cookie,没有登录,就展示登录button
    checkloginstatus() {

      var hasUserinfoCookie = this.checkLogin();

      if (hasUserinfoCookie) {
        console.log('Cookie "userInfo" 存在');

        document.getElementById("nologinStatusNav").style.display = "none";
      } else {
        console.log('Cookie "userInfo" 不存在');

    ElMessage.success("还没有登录,请登录");

        document.getElementById("loginStatusNav").style.display = "none";
      }
    }




  },

  mounted() {
    // this.loginUserInfo.portraitImage = "defaultouxiang.jpg"

    this.getLoginUserInfo();
    this.checkloginstatus();
    // this.showVipPaymentModal();


  },

  updated() {

  },






};




window.onload = function () {
  checkloginstatus();
  //  autoPlayVideo();
};









</script>

<style scoped></style>