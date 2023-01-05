import { createRouter, createWebHistory } from "vue-router"
import Main from "@/pages/Main"
import PostPage from "@/pages/PostPage"
import About from "@/pages/About"
import PostUniquePage from "@/pages/PostUniquePage"
import PostPageAPI from "@/pages/PostPageAPI"


const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: PostPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: PostUniquePage
    },
    {
        path: '/store',
        component: PostPage
    },
    {
        path: '/composition',
        component: PostPageAPI
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;