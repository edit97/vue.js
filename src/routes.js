import VueRouter from 'vue-router'

const Main = () => import("./components/Main");
const Hotel = () => import("./components/hotel/Hotel");
const Tours = () => import("./components/tours/Tours")

export default new VueRouter({
    routes:[
        {path:'/',component:Main,name:'Main'},
        {path:'/hotel',component:Hotel,name:'Hotel',},
        {path:'/tours',component:Tours,name:'Tours',},
        {path:'/error',component:Error,name:'error'},
    ],
    mode:'history'
})
