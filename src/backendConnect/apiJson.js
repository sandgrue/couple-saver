export default {
    searchResult: {
        url: '/customer/getRecords',
        method: "POST",
        data: {
            search: '',
            page: '',
            pagination: ''
        }
    },
}


// var axios = require('axios');
// var data = JSON.stringify({
//   "search": "los",
//   "page": 1,
//   "pagination": 10
// });

// var config = {
//   method: 'post',
//   url: 'https://morning-journey-39802.herokuapp.com/api/v1/customer/getRecords',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   data : data
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });
