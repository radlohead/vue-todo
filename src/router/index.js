import Vue from 'vue'
import Router from 'vue-router'
import Todo from '@/containers/Todo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Todo',
      component: Todo
    }
  ]
})
