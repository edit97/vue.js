import VueRouter from 'vue-router'

const Main = () => import("./components/Main");
const Hotel = () => import("./components/hotel/Hotel");
// import Ticket from "./components/tab/Ticket";
// const NewsView = () => import("./components/NewsView")
// const Login = () => import("./components/Login")
// const Register = () => import("./components/Register")
// const myNews = () => import("./components/user/myNews")
// const addNews = () => import("./components/user/addNews")
// const ErrorAuth = () => import("./components/ErrorAuth")
// const Error = () => import("./components/Error")

export default new VueRouter({
    routes:[
        {path:'/',component:Main,name:'mainPage'},
        /*{path:'/news/:id',component:NewsView,name:'newsView'},
        {path:'/profile',component:Profile,name:'profile',beforeEnter(to,frm,next){
            let user = localStorage.getItem('user');
                if(user === null){
                    next('errorAuth')
                }
                else{
                    next(true)
                }
            }},
        {path:'/login',component:Login,name:'login',beforeEnter(to, frm, next) {
                let user = localStorage.getItem('user');
                if(user !== null){
                    next('error')
                }
                else{
                    next(true)
                }

            }},
        {path:'/register',component:Register,name:'register',beforeEnter(to, frm, next){
                let user = localStorage.getItem('user');
                if(user !== null){
                    next('error')
                }
                else{
                    next(true)
                }
            }},
        {path:'/myNews',component:myNews,name:'myNews'},*/
        {path:'/hotel',component:Hotel,name:'Hotel'},
        {path:'/error',component:Error,name:'error'},
        // {path:'/errorAuth',component:ErrorAuth,name:'errorAuth'},
    ],
    mode:'history'
})
