import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import store from './store/store'
import { createRouter, createWebHistory } from 'vue-router'
import Counter from '@/views/Counter.vue'
import PageNotFound from '@/views/PageNotFound.vue'
import Home from '@/views/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/counter',
            name: 'counter',
            component: Counter,
          },
          {
            path: '/:pathMatch(.*)*',
            name: '404 page',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: PageNotFound,
          }
    ]
})

createApp(App).use(store).use(router).mount('#app')
