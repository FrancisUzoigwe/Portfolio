import Contact from '../../page/Contact'
import Header from '../static/Header'
import { Outlet } from 'react-router-dom'
import { motion } from "framer-motion"

const BlogLayout = () => {
    return (
        <div>
            <Header />
            <motion.div initial={{ y: 100, opacity: 0 }} animate={{
                y: 0, opacity: 1, transition: {
                    duration: 0.7
                }
            }}>
                <Outlet />
                <Contact />
            </motion.div>
            
        </div>
    )
}

export default BlogLayout