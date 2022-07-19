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
    agencyDetail: {
        url: '/customer/get-content?_id=:agencyID',
        method: 'GET',
        data: {}
    }
}
