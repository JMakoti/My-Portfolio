import Styles from '../styles/Navbar.module.css';
import { FaHome, FaUser, FaGraduationCap, FaTools, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import profile from '../assets/logo.jpeg';
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <div>
            <div className={Styles.navbar}>
                <div>
                    <div className={Styles.profile}>
                        <img src={profile} alt="profile" />
                    </div>
                    <div className={Styles.icon}>
                        {/* icons */}

                    </div>
                </div>

                <div className={Styles.nav}>
                    <Link to="/" className={Styles.link}><h4> <FaHome /><span>Home</span></h4></Link>
                    <Link to="/about"><h4><FaUser /> <span> About</span></h4></Link>
                    <Link to="/education"><h4><FaGraduationCap />  <span>Education</span></h4></Link>
                    <Link to="/skills"><h4><FaTools />  <span>Skills</span></h4></Link>
                    <Link to="/projects"><h4><FaProjectDiagram /> <span> Projects</span></h4></Link>
                    <Link to="/contact"><h4><FaEnvelope />  <span>Contact</span></h4></Link>
                </div>
            </div>

        </div>
    )
}
