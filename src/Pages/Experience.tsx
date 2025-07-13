import Styles from '../styles/Experience.module.css';
import slogo from '../assets/sph-logo.png';
import clogo from '../assets/cgtrh.jpeg';
import { MdMapsHomeWork } from 'react-icons/md';

export default function Experience() {
    return (
        <div className={Styles.expContainer}>

            <div className={Styles.expSection}>
                <div className={Styles.expSectionHeader}>
                    <h1>Work Experience</h1>
                    <p>Summary of my Work Experience.</p>
                </div>

                <div className={Styles.expSectionContent}>
                    <div className={Styles.logo}> <img src={slogo} alt="SPH" /></div>
                    <div className={Styles.expSectionDesc}>
                        <div className={Styles.expSectionTitle}>
                            <h2>Software Developer</h2>
                            <span>May 2025 - Now</span>
                        </div>
                        <h3 className={Styles.sch}><MdMapsHomeWork />Swahilipot Hub Foundation</h3>
                        <p>
                            Contributed to the development of robust backend systems for event and user management, integrating third-party services and
                            improving data processing efficiency.

                        </p>
                        <div className={Styles.cardTags}>
                            <span className={Styles.cardTag}>
                                Reactjs
                            </span>
                            <span className={Styles.cardTag}>
                                PostgreSQL
                            </span>
                            <span className={Styles.cardTag}>
                                Django
                            </span>
                            <span className={Styles.cardTag}>
                                RESTful APIs
                            </span>
                        </div>

                    </div>
                </div>

                <div className={Styles.expSectionContent}>
                    <div className={Styles.logo}> <img src={clogo} alt="CGTRH" /></div>
                    <div className={Styles.expSectionDesc}>
                        <div className={Styles.expSectionTitle}>
                            <h2>ICT Personnel</h2>
                            <span>May 2023 - Aug 2023</span>
                        </div>
                        <h3 className={Styles.sch}><MdMapsHomeWork />Coast General Teaching & Referral Hospital</h3>
                        <p>
                            Become part of a great team whose focused on:
                            <ul className={Styles.list}>
                                <li>Installation and Configuration of Hardware & Software Systems</li>
                                <li>Monitoring and maintaining computer Hardware system and network</li>
                                <li>Providing Technical Support in a timely manner within the hospital</li>
                                <li>Training staff members on how to use the hospital database</li>
                            </ul>
                            <p>Together, we ensure CGTRH infrastructure stays robust and efficient.</p>

                        </p>
                        <div className={Styles.cardTags}>
                            <span className={Styles.cardTag}>
                                Technical Support
                            </span>
                            <span className={Styles.cardTag}>
                                Configurations
                            </span>
                            <span className={Styles.cardTag}>
                                Training
                            </span>
                            <span className={Styles.cardTag}>
                                Maintainance
                            </span>
                        </div>

                    </div>
                </div>



            </div>

        </div >

    )
}
