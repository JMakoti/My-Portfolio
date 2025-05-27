import { useEffect, useRef, useState } from 'react';
import Styles from '../styles/Skills.module.css';
import { FaLaptopCode, FaBug, FaCubes } from 'react-icons/fa';
import serviceData from '../data/skill.json';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaLaptopCode,
  FaBug,
  FaCubes,
};

function useIsMobile(breakpoint = 600) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);
  return isMobile;
}

export default function Skills() {
  const isMobile = useIsMobile();
  const [current, setCurrent] = useState(0);
  const cardCount = serviceData.services.length;
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isMobile) return;
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % cardCount);
    }, 3000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [cardCount, isMobile]);

  return (
    <div className={Styles.skillSection}>
      <div className={Styles.skillSectionTitle}>
        <h1>My Skills Set</h1>
      </div>
      <div className={Styles.skillCards}>
        {isMobile
          ? serviceData.services.map((service, idx) => {
              const Icon = iconMap[service.icon];
              return (
                <div
                  className={Styles.skillCard}
                  key={idx}
                  style={{
                    display: idx === current ? 'block' : 'none',
                    transition: 'all 0.5s'
                  }}
                >
                  <div className={Styles.skillIcon}>
                    {Icon && <Icon className={Styles.icon} />}
                  </div>
                  <div className={Styles.skillText}>
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                  </div>
                </div>
              );
            })
          : serviceData.services.map((service, idx) => {
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