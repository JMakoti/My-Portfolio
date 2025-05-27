import Styles from '../styles/Skills.module.css';
import { FaLaptopCode, FaBug, FaCubes } from 'react-icons/fa';
import serviceData from '../data/skill.json';

// Map icon name to component type
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaLaptopCode,
  FaBug,
  FaCubes,
};

export default function Skills() {
  return (
    <div className={Styles.skillSection}>
      <div className={Styles.skillSectionTitle}>
        <h1>My Skills Set</h1>
      </div>
      <div className={Styles.skillCards}>
        {serviceData.services.map((service, idx) => {
          const Icon = iconMap[service.icon];
          return (
            <div className={Styles.skillCard} key={idx}>
              <div className={Styles.skillIcon}>
                {Icon && <Icon className={Styles.icon} />}
              </div>
              <div className={Styles.skillText}>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className={Styles.allSkills}>
        {serviceData.skills.map((category, idx) => (
          <div key={idx}>
            <h2 className={Styles.skillSectionSubtitle}>{category.category}</h2>
            <div className={Styles.codeGrid}>
              {category.skills.map((skill, i) => (
                <div className={Styles.codeSkill} key={i}>
                  <span className={Styles.codeSkillIcon}>
                    <img src={skill.icon} alt={skill.alt} />
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}