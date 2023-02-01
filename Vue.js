var application = new Vue({
    data:{
        test:1
    },
    created: function () {
        console.log('created')
    },
    mounted: function () {
        console.log('mounted')
    },
    computed: function () {
        console.log('computed')
    }
  })