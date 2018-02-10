import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

var router = new Router()

router.map({
    '/': {
        component: HomeView
    }
})

router.redirect({
    '*': '/'
})

router.start(App, '#app')