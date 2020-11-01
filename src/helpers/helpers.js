// import axios from 'axios';
// import axios from 'axios';
// import Vue from 'vue';
// import VueFlashMessage from 'vue-flash-message';
// import 'vue-flash-message/dist/vue-flash-message.min.css';

// Vue.use(VueFlashMessage, {
//     messageOptions: {
//       timeout: 3000,
//       pauseOnInteract: true
//     }
// });

// const vm = new Vue();
// const baseURL = 'http://localhost:3000';

// const handleError = fn => (...params) =>
//   fn(...params).catch(error => {
//     vm.flash(`${error.response.status}: ${error.response.statusText}`, 'error');
// });

// export const api = {
    // getAddress: handleError(async(content) => {
    //     console.log(content)
        
    //     const res = await axios({
    //         method: 'post',
    //         url: baseURL,
    //         data: content
    //     })
    //     return res
        
    // })

    // getAddress(content) {
    //     console.log('123',content)
    // }
    
    // gettasks: handleError(async () => {
    //   const res = await axios.get(baseURL);
    //   return res.data;
    // }),
    // deletetask: handleError(async id => {
    //   const res = await axios.delete(baseURL + id);
    //   return res.data;
    // }),
    // createtask: handleError(async payload => {
    //   const res = await axios.post(baseURL, payload);
    //   return res.data;
    // }),
    // updatetask: handleError(async payload => {
    //   const res = await axios.put(baseURL + payload._id, payload);
    //   return res.data;

// };