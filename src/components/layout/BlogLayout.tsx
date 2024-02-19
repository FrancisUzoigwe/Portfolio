import Contact from '../../page/Contact'
import Header from '../static/Header'
import { Outlet } from 'react-router-dom'

const BlogLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Contact />
        </div>
    )
}

export default BlogLayout