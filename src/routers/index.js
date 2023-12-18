import { HeaderOnly } from '~/components/Layouts'

import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Upload from '~/pages/Upload'
import Search from '~/pages/Search'
// Public routers
const publicRouters  = [
    { path: '/', component: Home, },
    { path: '/following', component: Following, },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
]
// Private routers
const privateRouters  = [
    
]

export {  publicRouters, privateRouters }