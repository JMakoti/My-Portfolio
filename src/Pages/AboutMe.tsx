import { BsGithub } from 'react-icons/bs';
import Styles from '../styles/AboutMe.module.css';
import { MdMapsHomeWork } from "react-icons/md";
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function AboutMe() {
    return (
        <div className={Styles.aboutMeContainer}>
            <div className={Styles.aboutSection}>
                <div className={Styles.aboutSectionTitle}>
                    <h1>I'm Joseph Mwamuye</h1>
                    <div className={Styles.aboutSectionTitleIcons}>
                        <h4><MdMapsHomeWork />Likoni-Mombasa </h4>
                        <h4>
                            <MdEmail />
                            <Link to="mailto:mwamuyejoseph5@gmail.com" className={Styles.link}>
                                mwamuyejoseph5@gmail.com
                            </Link>
                        </h4>
                        <h4>
                            <BsGithub />
                            <Link to="https://github.com/JMakoti" rel="noopener noreferrer" className={Styles.link}>
                                @JMakoti
                            </Link>
                        </h4>
                    </div>
                </div>
                <div>
                    <h2 className={Styles.aboutSectionSubtitle}>A little about me</h2>
                    <div className={Styles.aboutSectionDesc}>
                        <p className={Styles.aboutSectionText}>
                            I'm a passionate software engineer with a strong interest in web development and a knack for problem-solving.
                            I have experience in various programming languages and frameworks, including JavaScript, React, and Node.js.
                            I thrive in collaborative environments and enjoy working with teams to bring ideas to life.
                            I believe that continuous learning is key to success in the ever-evolving tech industry.
                        </p>

                        <h2 className={Styles.aboutSectionSubtitle}>Career    aspirations:</h2>
                        <p className={Styles.aboutSectionText}>
                            My goal is to contribute to impactful projects that make a difference in people's lives.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
