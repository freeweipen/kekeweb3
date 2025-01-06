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
    showVideoComment(id) {
      if (!this.displayStatus.includes(id)) {
        this.displayStatus.push(id);

        axios
          .post(
            "http://service.kekechat.com/api/comment/userComment/getVideoComment",
            {
              contentId: this.videoIdList.toString(),
              commentPage: this.commentPage,
            },
            {
              withCredentials: true, //设置跨域的时候传递cookie，需要服务端的配合
            }
          )
          .then((response) => {
            var data = response.data.data;

            this.commentList = data;
          })
          .catch((error) => {
            console.log(error);
          });

        document.getElementById(id).style.display = "block";

        return;
      } else {
        this.displayStatus = this.displayStatus.filter((i) => i !== id);
        //操作评论列表显示或隐藏
        document.getElementById(id).style.display = "none";

        return;
      }
    },

    getVideoComment() {
      axios
        .post(
          "http://service.kekechat.com/api/comment/userComment/getVideoComment",
          {
            contentId: this.videoIdList.toString(),
            commentPage: this.commentPage,
          },
          {
            withCredentials: true, //设置跨域的时候传递cookie，需要服务端的配合
          }
        )
        .then((response) => {
          var data = response.data.data;

          this.commentList = data;

          //this.commentList = this.commentList.concat(result);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    submitComment(contentId) {
      //this.showVideoComment(contentId); //发送评论的时候 ，打开 并展示评论
      //下面axios 同showVideoComment
      //  this.getVideoComment();

      if (!this.displayStatus.includes(contentId)) {
        this.displayStatus.push(contentId);

        axios
          .post(
            "http://service.kekechat.com/api/comment/userComment/getVideoComment",
            {
              contentId: this.videoIdList.toString(),
              commentPage: this.commentPage,
            },
            {
              withCredentials: true, //设置跨域的时候传递cookie，需要服务端的配合
            }
          )
          .then((response) => {
            var data = response.data.data;

            this.commentList = data;
          })
          .catch((error) => {
            console.log(error);
          });

        document.getElementById(contentId).style.display = "block";
      } else {
        this.displayStatus = this.displayStatus.filter((i) => i !== contentId);
        //操作评论列表显示或隐藏
        //  document.getElementById(contentId).style.display = "none";
      }

      axios
        .post(
          "http://service.kekechat.com/api/comment/userComment/submitComment",
          {
            comment: this.comment, //用户的具体评论
            // userId: this.userId, //评论用户的id,登录的 时候记录下来 没有使用
            contentId: contentId, //在哪个内容下评论的
          },
          {
            withCredentials: true, //设置跨域的时候传递cookie，需要服务端的配合
          }
        )
        .then((response) => {
          var data = response.data;
          //这是用户添加的评论对象，直接添加到本地commentList
          var comment = { name: "John", comment: this.comment };

          console.log(
            "commment" + this.commentList[contentId].unshift(comment)
          );

          console.log("ccccjson" + JSON.stringify(this.commentList[contentId]));

          // data = JSON.stringify(this.commentList[contentId]);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getVideoList() {
      //后端不使用这个参数
      this.videoPage = this.videoPage + 1;

      var temptoken;

      function checkCookie(name) {
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i].trim();
          if (cookie.startsWith(name + "=")) {
            return true;
          }
        }
        return false;
      }

      var hasUserIdCookie = checkCookie("temptoken");
      if (hasUserIdCookie) {
        console.log("存在名为 temptoken 的 cookie");

        function getCookie(name) {
          var cookies = document.cookie.split(";");
          for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.startsWith(name + "=")) {
              return cookie.substring(name.length + 1);
            }
          }
          return null;
        }

        // 调用示例
        var temptokenValue = getCookie("temptoken");

        temptoken = temptokenValue;
      } else {
        console.log("不存在名为 temptoken 的 cookie");
        function generateUUID() {
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
            /[xy]/g,
            function (c) {
              var r = (Math.random() * 16) | 0,
                v = c == "x" ? r : (r & 0x3) | 0x8;
              return v.toString(16);
            }
          );
        }

        var uuid = generateUUID();
        console.log(uuid);

        function setCookie(name, value, days) {
          var expires = "";
          if (days) {
            var date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = "; expires=" + date.toUTCString();
          }
          document.cookie = name + "=" + value + expires + "; domain=.kekechat.com;  path=/";


        }

        // 调用示例
        setCookie("temptoken", uuid, 365);
      }

      axios.defaults.withCredentials = true;
      axios
        .post(
          "http://service.kekechat.com/api/video/videoList/getVideoList",
          {
            page: this.videoPage,
            temptoken: temptoken,
          },

          {
            withCredentials: true,
          }
        )
        .then((response) => {
          var data = response.data;
          console.log(data.data);

          this.videoList = this.videoList.concat(data.data);

          //   this.videoList = data.data;

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

    searchContent(event) {
      event.preventDefault(); // 阻止默认提交行为

      axios.defaults.withCredentials = true;
      axios
        .post(
          "http://service.kekechat.com/api/video/videoList/searchContent",
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
 

    incLikeNum(videoID) {

      

      var hasUserIdCookie = this.checkLoginStatus();
      if (!hasUserIdCookie) {
       
        const message = ElementPlus.ElMessage.success("还没有登录");
        return;
      }
      
      axios.defaults.withCredentials = true;
      axios
        .post(
          "http://service.kekechat.com/api/video/videoList/incLikeNum",
          {
            videoID: videoID,
          },

          {
            withCredentials: true,
          }
        )
        .then((response) => {
          // 根据id选择元素
          var elementById = document.getElementById("likeEle" + videoID);
          // 如果找到具有指定id的元素，则添加"active" class
          if (elementById) {

            elementById.classList.add("active");

            this.videoList.forEach(item => { if (item.id === videoID) { item.starNum = item.starNum+1; } });

          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getRecommendUser(videoID) {

      
      axios.defaults.withCredentials = true;
      axios
        .post(
          "http://service.kekechat.com/api/user/userInfo/getRecommendUser",
          {
            
          },

          {
            withCredentials: true,
          }
        )
        .then((response) => {

          var data = response.data;
          this.recommendUser = data.data;
            console.log(this.recommendUser);

        })
        .catch((error) => {
          console.log(error);
        });
    },

    addFollowUser(followId) {

      
      
      axios.defaults.withCredentials = true;
      axios
        .post(
          "http://service.kekechat.com/api/user/userInfo/addFollowUser",
          {
            followId:followId,
          },

          {
            withCredentials: true,
          }
        )
        .then((response) => {

          ElementPlus.ElMessage.success("关注用户成功");

        })
        .catch((error) => {
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

    showVipPaymentModal(){
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

  },

  mounted() {
    // this.loginUserInfo.portraitImage = "defaultouxiang.jpg"
    this.getVideoList();
    this.getLoginUserInfo();
    this.getRecommendUser();
   // this.showVipPaymentModal();

  
  },

  updated() {
    // 在数据更新后执行的操作
    //console.log("Data updated");
    // 可以在这里调用相应的方法进行操作
    this.autoPlayVideo();
  },
};

const vm = Vue.createApp(app).mount("#app");

window.onload = function () {
  checkloginstatus();
  //  autoPlayVideo();
};

//检查是否有登录cookie,没有登录,就展示登录button
function autoPlayVideo() {
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
    { threshold: 0.3 }
  );

  videoContainers.forEach((videoContainer) => {
    observer.observe(videoContainer);

    console.log("rrrrrrrrr");
  });
}

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

function triggerFileInput() {
  var fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.multiple = true;
  fileInput.style.display = "none";
  fileInput.onchange = function () {
    var files = fileInput.files;
    for (var i = 0; i < files.length; i++) {
      uploadFile(files[i]);
    }
  };
  document.body.appendChild(fileInput);
  fileInput.click();
}

function dragOverHandler(event) {
  event.preventDefault();
}
function dropHandler(event) {
  event.preventDefault();
  var files = event.dataTransfer.files;
  for (var i = 0; i < files.length; i++) {
    uploadFile(files[i]);
  }
}

var formData = new FormData();

var fileArry = [];

function uploadFile(file) {
  var fileSize = file.size; // Get the size of the file in bytes
  fileSize = (fileSize / 1024 / 1024).toFixed(2);
  var fileName = file.name; // Get the name of the file

  var videoList = new Object();
  videoList.name = fileName;
  videoList.info = "已选择文件" + fileName + "  文件大小 " + fileSize + "M";

  var temp = vm.fileInfoList;
  temp.push(videoList);
  vm.fileInfoList = temp;

  fileArry.push(file);

  //formData.delete('file1');

  formData.append("title", "titleaaa");

  // var formData = new FormData();
  // formData.append('file', file);
  // var xhr = new XMLHttpRequest();
  // xhr.open('POST', 'http://service.kekechat.com/api/video/uploadVideo/uploadoss2', true);
  // xhr.onload = function () {
  //   if (xhr.status === 200) {
  //     alert('File uploaded successfully');
  //   } else {
  //     alert('File upload failed');
  //   }
  // };
  // xhr.send(formData);
}

function uploadFullVideo() {
  fileArry.forEach((element) => {
    vm.fileInfoList.forEach((el) => {
      if (el.name === element.name) {
        formData.append("files", element);
      }
    });
  });

  axios
    .post(
      "http://service.kekechat.com/api/video/uploadVideo/uploadoss2",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },

      {
        withCredentials: true,
      }
    )
    .then((response) => {
      console.log("Files uploaded successfully");
    })
    .catch((error) => {
      console.error("Error uploading files: ", error);
    });
}

function clearSelectFile() {
  vm.fileInfoList = [];
  fileArry = [];

  formData.delete("files");
  formData.delete("title");
}
