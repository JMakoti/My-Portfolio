import { FaLaptopCode } from 'react-icons/fa6';
import Styles from '../styles/Skills.module.css';
import { FaBug, FaCubes, FaGit } from 'react-icons/fa';
import node from '../assets/node.png';
import mysql from '../assets/mysql.avif';
import mongodb from '../assets/mongodb.png'
import git from '../assets/18133.png'

import react from '../assets/react.png';
import js from '../assets/js.png';
import html from '../assets/html.jpg'
import css from '../assets/css.png'


export default function Skills() {
  return (
    <div className={Styles.skillSection}>
      <div className={Styles.skillSectionTitle}>
        <h1 >My Skills Set</h1>
      </div>
      <div className={Styles.skillCards} >
        <div className={Styles.skillCard}>
          <div className={Styles.skillIcon}>
            <FaLaptopCode className={Styles.icon} />
          </div>
          <div className={Styles.skillText}>
            <h4><span>Website</span> design</h4>
            <p>I can bring your best ideas into life!</p>
          </div>
        </div>

        <div className={Styles.skillCard}>
          <div className={Styles.skillIcon}>
            <FaBug className={Styles.icon} />
          </div>
          <div className={Styles.skillText}>
            <h4>Code<span> Debbugging</span></h4>
            <p>Uncover, Fix, Improve!</p>
          </div>
        </div>

        <div className={Styles.skillCard}>
          <div className={Styles.skillIcon}>
            <FaCubes className={Styles.icon} />
          </div>
          <div className={Styles.skillText}>
            <h4><span>App</span> Creation</h4>
            <p>I can make creative and innovative apps!</p>
          </div>
        </div>

      </div>

      <div className={Styles.allSkills}>
        <div>
          <h2 className={Styles.skillSectionSubtitle}>Backend</h2>
          <div className={Styles.codeGrid}>
            <div className={Styles.codeSkill}>
              <span className={Styles.codeSkillIcon}>
                <img src={node} alt="nodejs" />
              </span>
            </div>
            <div className={Styles.codeSkill}>
              <span className={Styles.codeSkillIcon}>
                <img src={mysql} alt="mySql" />
              </span>
            </div>
            <div className={Styles.codeSkill}>
              <span className={Styles.codeSkillIcon}>
                <img src={mongodb} alt="mongodb" />
              </span>
            </div>
            <div className={Styles.codeSkill}>
              <span className={Styles.codeSkillIcon}>
                <img src={git} alt="git" />
              </span>
            </div>
          </div>
        </div>

        <div>
          <h2 className={Styles.skillSectionSubtitle}>Frontend Skills</h2>
          <div className={Styles.codeGrid}>
            <div className={Styles.codeSkill}>
              <span className={Styles.codeSkillIcon}>
                <img src={react} alt="reactjs" />
              </span>
            </div>
            <div className={Styles.codeSkill}>
              <span className={Styles.codeSkillIcon}>
                <img src={js} alt="js" />
              </span>
            </div>
            <div className={Styles.codeSkill}>
              <span className={Styles.codeSkillIcon}>
                <img src={html} alt="html" />
              </span>
            </div>
            <div className={Styles.codeSkill}>
              <span className={Styles.codeSkillIcon}>
                <img src={css} alt="css" />
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
