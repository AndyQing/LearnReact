import ComA from '../components/ComA'
import ComB from '../components/ComB'
import ComC from '../components/ComC'
import ComD from '../components/ComD'
import News from '../components/News';
import NewsContent from '../components/NewsContent'

let routes = [
    {
        path: "/",
        component: ComA,
        exact: true
    },
    {
        path: "/b",
        component: ComB
    },
    {
        path: "/c/:cid",
        component: ComC
    },
    {
        path: "/d",
        component: ComD
    },
    {
        path: "/news",
        component: News,
        children:[//嵌套路由
            {
                path: "/news/",
                component: ComB
            },
            {
                path: "/news/newscontent/:aid",
                component: NewsContent
            }
        ]
    }
]
export default routes;