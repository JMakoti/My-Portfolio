import Styles from '../styles/Portfolio.module.css';
import { FaLink } from 'react-icons/fa';
import portfolioData from '../data/porfolio.json';


export default function Portfolio() {
  return (
    <div className={Styles.portSection}>
      <div className={Styles.portSectionTitle}>
        <h1 >My Portfolio</h1>
        <p>Here Are Some Of My Works</p>
      </div>
      <div className={Styles.portSectionCards}>

        {portfolioData.projects.map((project, idx) => (
          <div className={Styles.portSectionCard} key={idx}>
            <div className={Styles.cardLogo}>
              <img
                src={project.image}
                alt={project.title}
                className={Styles.portfolioImage}
              />
            </div>
            <div className={Styles.cardText}>
              <h2 className={Styles.projectTitle}>{project.title}</h2>
              <span className={Styles.cardSubTitle}>{project.category}</span>
              <div className={Styles.cardTags}>
                {project.tags.map((tag, i) => (
                  <span className={Styles.cardTag} key={i}>
                    {tag.name}
                  </span>
                ))}
              </div>
              <p className={Styles.cardDesc}>
                {project.description}
              </p>
              <div className={Styles.cardBtn}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={Styles.projectBtn}
                >
                  <FaLink />
                </a>
                {/* <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={Styles.projectBtn}
                >
                  GitHub
                </a> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
