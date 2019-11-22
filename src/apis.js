import Vue from "vue";
import axios from "axios";
Vue.prototype.$apis = {
  uploadSubmit(data) {
    return axios({
      url: "/uploadFileUrl",
      headers: { "Content-Type": "multipart/form-data" },
      method: "post",
      data
    });
  }
};

export default Vue.$apis;
