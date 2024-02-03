

/*Vue 3*/
Vue.createApp({
  data() {
    return {
      items: [{ message: "Foo" }, { message: "Bar" }],
      phone: "",
    };
  },

  methods: {
    testGet() {
      axios
        .get("/pc/center/mall", {
          params: {
            cat: 2,
            isfromajax: 1,
          },
        })
        .then((response) => {
          console.log(response);
          this.testGetData = response.data.return_data[0].content;
        })
        .catch(function (error) {
          // 请求失败处理
          console.log(error);
        });
    },

    async sendPhoneCode() {
      console.log("aaaa");
      try {
        const response = await axios.get("http://127.0.0.1/user/LoginRegister/sendPhoneCode",{
          data:{
            phone
          }
        });
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },






  },
}).mount("#app");
