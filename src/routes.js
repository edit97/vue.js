import VueRouter from 'vue-router'

const Main = () => import("./components/Main");
const Hotel = () => import("./components/hotel/Hotel");

export default new VueRouter({
    routes:[
        {path:'/',component:Main,name:'Main'},
        {path:'/hotel',component:Hotel,name:'Hotel',},
        {path:'/error',component:Error,name:'error'},
    ],
    mode:'history'
})
