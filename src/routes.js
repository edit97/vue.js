import VueRouter from 'vue-router'

const Main = () => import("./components/Main");
const Hotel = () => import("./components/hotel/Hotel");
const Tours = () => import("./components/tours/Tours");
const Home = () => import("./components/rent/Home");
const Rent = () => import("./components/rent/Rent");

export default new VueRouter({
    routes:[
        {path:'/',component:Main,name:'Main'},
        {path:'/hotel',component:Hotel,name:'Hotel',},
        {path:'/tours',component:Tours,name:'Tours',},
        {path:'/home',component:Home,name:'Home',},
        {path:'/rent',component:Rent,name:'Rent',},
        {path:'/error',component:Error,name:'error'},
    ],
    mode:'history'
})
