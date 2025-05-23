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
                    <Link to="/" className={Styles.link}><h4> <FaHome /> Home</h4></Link>
                    <Link to="/about"><h4><FaUser /> About</h4></Link>
                    <Link to="/education"><h4><FaGraduationCap /> Education</h4></Link>
                    <Link to="/skills"><h4><FaTools /> Skills</h4></Link>
                    <Link to="/projects"><h4><FaProjectDiagram /> Projects</h4></Link>
                    <Link to="/contact"><h4><FaEnvelope /> Contact</h4></Link>
                </div>
            </div>

        </div>
    )
}
