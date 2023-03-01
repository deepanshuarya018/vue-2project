import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
      {
        path: '/question1',
        name: 'question1',
        component:() => import('@/components/question1/main.vue')
      },
      {
        path: '/question2',
        name: 'question 2',
        component: () => import('@/components/question2/main.vue')
      },
      {
        path: '/question3',
        name: 'question 3',
        component: () => import('@/components/question3/main.vue')
      }
    ]
})

export default router