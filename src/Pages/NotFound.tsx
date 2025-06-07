import { Link } from 'react-router-dom'
import Styles from '../styles/NotFound.module.css'
import notFound from '/assets/notFound.png'


export default function NotFound() {
    return (
        <div className={Styles.notFound}>
            <img src={notFound} alt="404 Not Found" className={Styles.notFoundImg} />
            <p className={Styles.notFoundMsg}>Oops! The page you are looking for does not exist.</p>
            <Link to="/" className={Styles.notFoundBtn}>Go Home</Link>
            <footer className={Styles.notFoundFooter}>
                &copy; {new Date().getFullYear()} Johsafe. All rights reserved.
            </footer>
        </div>
    )
}
