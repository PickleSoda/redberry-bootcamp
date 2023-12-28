import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import BlogDetailPage from './views/BlogDetailPage.vue'
import AddBlogPage from './views/AddBlogPage.vue'

const routes = [
 { path: '/', component: HomePage },
 { path: '/blog/:id', component: BlogDetailPage },
 { path: '/add', component: AddBlogPage },
]

const router = createRouter({
 history: createWebHistory(),
 routes,
})

export default router
