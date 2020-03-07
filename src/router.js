import Home from './components/Home.vue'
import Stocks from './components/stocks/Stocks';
import Portfolio from './components/portfolio/Portfolio';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
const router = new VueRouter({
    routes: [
        { path: '/portfolio', component: Portfolio },
        { path: '/stocks', component: Stocks},
        { path: '/', component: Home}
    ]
});

export default router;