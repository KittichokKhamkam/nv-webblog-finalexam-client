import Vue from 'vue'
import Router from 'vue-router'
import UserIndex from '@/components/Users/Index'
import UserEdit from '@/components/Users/EditUser'
import UserShow from '@/components/Users/ShowUser'
import UserCreate from '@/components/Users/CreateUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/speaker/create',
      name: 'user-create',
      component: UserCreate
    },
    {
      path: '/speaker/edit/:speakerId',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/speaker/:speakerId',
      name: 'user',
      component: UserShow
    },
    {
      path: '/speakers',
      name: 'speakers',
      component: UserIndex
    },

    

  ]
})
