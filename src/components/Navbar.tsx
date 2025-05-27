import Styles from '../styles/Navbar.module.css';
import { FaHome, FaUser, FaGraduationCap, FaTools, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import profile from '../assets/logo.jpeg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

// This custom hook checks if the screen width is less than or equal to 600px (mobile)
function useIsMobile(breakpoint = 600) {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [breakpoint]);
    return isMobile;
}

export default function Navbar() {

    const isMobile = useIsMobile();

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
                    {!isMobile && (
                        <>
                            <Link to="/projects"><h4><FaProjectDiagram /> <span> Projects</span></h4></Link>
                            <Link to="/contact"><h4><FaEnvelope />  <span>Contact</span></h4></Link>
                        </>
                    )}
                </div>
            </div>

        </div>
    )
}
