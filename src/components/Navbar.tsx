import React from 'react'

import Styles from '../styles/Navbar.module.css';
import { FaHome, FaUser, FaGraduationCap, FaTools, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import profile from '../assets/logo.jpg';
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
                    <h4> <FaHome /> Home</h4>
                    <h4> <FaUser /> About</h4>
                    <h4> <FaGraduationCap /> Education</h4>
                    <h4> <FaTools /> Skills</h4>
                    <h4> <FaProjectDiagram /> Projects</h4>
                    <h4> <FaEnvelope /> Contact</h4>
                </div>
            </div>

        </div>
    )
}
