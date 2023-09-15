import { createRouter, createWebHashHistory } from 'vue-router'
import ContainerComp from '../components/ContainerComp'
import StudentComp from '../components/StudentComp'
import CourseComp from '../components/CourseComp'
import ScoreComp from '../components/ScoreComp'
import LoginPage from '../LoginPage.vue'



const routes = [ {
    path: "/",
    component: ContainerComp,
 
    children:[
        {
            path: "/student",          
            name:"student",
            component: StudentComp,
        },
        {
            path: "/course",
            name:"course",
            component: CourseComp,
        },
        {
            path: "/scores",
            name:"score",
            component: ScoreComp,
        }
        ]
        
    } ,
    {
        path: '/login',
        name: 'login',
       component: LoginPage
     }

]
const router = createRouter({
    history : createWebHashHistory(),
    routes,
})

export default router;