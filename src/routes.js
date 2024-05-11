import Home from './components/Home.vue';
import SignUp from './components/SignUp';
import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up'
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router