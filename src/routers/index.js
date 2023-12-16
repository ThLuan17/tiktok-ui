// Public routers
import Home from '~/pages/Home'
import Following from '~/pages/Following'

const publicRouters  = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
]
// Private routers
const privateRouters  = [
    
]

export {  publicRouters, privateRouters }