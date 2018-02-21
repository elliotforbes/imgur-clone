import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Profile from '@/components/Profile'
import Upload from '@/components/Upload'
import Register from '@/components/Register'
import cognitoAuth from '@/cognito'
Vue.use(Router)

function requireAuth (to, from, next) {
  cognitoAuth.isAuthenticated((err, loggedIn) => {
    if (err) return next()
    if (!loggedIn) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  })
}

function logout(to, from, next) {
  cognitoAuth.logout()
  next('/')
}

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/home', name: 'Home', component: Home },
    { path: '/login', name: 'Login', component: Login },
    { path: '/profile', name: 'Profile', component: Profile, beforeEnter: requireAuth },
    { path: '/upload', name: 'Upload', component: Upload, beforeEnter: requireAuth },
    { path: '/register', name: 'Register', component: Register },
    { path: '/logout', beforeEnter: logout }
  ]
})
