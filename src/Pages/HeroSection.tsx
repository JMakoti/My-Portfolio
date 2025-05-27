import Styles from '../styles/HeroSection.module.css';
import profile from '../assets/logo.jpeg';
import { Link } from 'react-router-dom';
import { FaDownload, FaFolderOpen, FaPhoneAlt } from 'react-icons/fa';
import useIsMobile from '../hooks/isMobile';

export default function HeroSection() {
    const isMobile = useIsMobile();
    return (
        <div className={Styles.heroSection}>
            <div className={Styles.heroSectionProfile}>
                <img src={profile} alt={profile} />
            </div>
            <div className={Styles.heroSectionProfileName}>
                <h1>I'm Joseph Mwamuye</h1>
                <div className={Styles.heroSectionDescriptions}>
                    <h2> Web Designer</h2>
                    <h2> Web Developer</h2>
                    <h2> Mobile Developer</h2>
                </div>

                {
                    isMobile ? (
                        <div className={Styles.heroIcons}>
                            <Link to="/contact" className={Styles.btn}><FaPhoneAlt /></Link>
                            <Link to="/projects" className={Styles.btn}><FaFolderOpen /></Link>
                            <a
                                href="/resume.pdf"
                                className={Styles.btn}
                                download
                                rel="noopener noreferrer"
                            >
                                <FaDownload />
                            </a>
                        </div>
                    ) : (
                        <div className={Styles.heroBtns}>
                            <Link to="/contact" className={Styles.btn}>Contact Me</Link>
                            <Link to="/projects" className={Styles.btn}>My Projects</Link>
                            <a
                                href="/resume.pdf"
                                className={Styles.btn}
                                download
                                rel="noopener noreferrer"
                            >
                                Download Resume
                            </a>
                        </div>
                    )
                }

            </div>

        </div>
    )
}
