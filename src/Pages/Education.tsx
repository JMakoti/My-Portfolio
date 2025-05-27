import Styles from '../styles/Education.module.css';
import slogo from '../assets/rongo.jpg';
import { MdMapsHomeWork } from 'react-icons/md';

export default function Education() {
    return (
        <div className={Styles.eduContainer}>

            <div className={Styles.eduSection}>
                <div className={Styles.eduSectionHeader}>
                    <h1>Education Background</h1>
                    <p>My academic journey and achievements.</p>
                </div>
                <div className={Styles.eduSectionContent}>
                    <div className={Styles.logo}> <img src={slogo} alt="Rongo University" /></div>
                    <div className={Styles.eduSectionDesc}>
                        <div className={Styles.eduSectionTitle}>
                            <h2>Bachelor of Science in Computer Science</h2>
                            <span>Graduated: 2024</span>
                        </div>
                        <h3 className={Styles.sch}><MdMapsHomeWork />Rongo University</h3>
                        <p>
                            Earned a Bachelor's degree in Computer Science, focusing on algorithms, data structures, software engineering, and web development. Gained hands-on experience through various programming projects and boot camps.
                        </p>
                    </div>
                </div>
            </div>

        </div>

    )
}
