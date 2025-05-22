import Styles from '../styles/HeroSection.module.css';
import profile from '../assets/logo.jpg';
import { Link } from 'react-router-dom';

export default function HeroSection() {
    return (
        <div className={Styles.heroSection}>
            <div className={Styles.heroSectionProfile}>
                <img src={profile} alt={profile} />
            </div>
            <div className={Styles.heroSectionProfileName}>
                <h1>I'm Joseph Mwamuye</h1>
                <div className={Styles.heroSectionDescriptions}>
                    <h2> Software Engineer</h2>
                    <h2> Web Developer</h2>
                    <h2> Mobile Developer</h2>
                </div>
                <div className={Styles.heroBtns}>
                    <Link to="/contact" className={Styles.btn}>Contact Me</Link>
                    <Link to="/contact" className={Styles.btn}>My Projects</Link>
                    <Link to="/contact" className={Styles.btn}>Download Resume</Link>
                </div>

            </div>

        </div>
    )
}
