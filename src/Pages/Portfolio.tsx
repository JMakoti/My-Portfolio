import Styles from '../styles/Portfolio.module.css';
import portLogo from '../assets/pwani.png';
import movieLogo from '../assets/movie.png';
import { FaLink } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Portfolio() {
  return (
    <div className={Styles.portSection}>
      <div className={Styles.portSectionTitle}>
        <h1 >My Portfolio</h1>
        <p>Here Are Some Of My Works</p>
      </div>
      <div className={Styles.portSectionCards}>

        <div className={Styles.portSectionCard}>
          <div className={Styles.cardLogo}>
            <img src={portLogo} alt="Portfolio Logo"></img>
          </div>
          <div className={Styles.cardText}>
            <h4 className={Styles.cardTitle}>Pwani Innovation Week</h4>
            <span className={Styles.cardSubTitle}>Website</span>
            <div className={Styles.cardTags}>
              <span className={Styles.cardTag}>React</span>
              <span className={Styles.cardTag}>Vercel</span>
              <span className={Styles.cardTag}>Innovation</span>
            </div>
            <p className={Styles.cardDesc}>
              A fully-featured productivity website developed with React, enabling users to see the event, and book the event. It offers intuitive UI.
            </p>
            <div className={Styles.cardBtn}>
              <Link to="https://wall-of-developers-git-group2-munubis-projects.vercel.app/"><FaLink /></Link>
              {/* <Link to="https://github.com/JMakoti/wall-of-developers"><FaGithub /></Link> */}
            </div>
          </div>
        </div>

        <div className={Styles.portSectionCard}>
          <div className={Styles.cardLogo}>
            <img src={movieLogo} alt="Portfolio Logo"></img>
          </div>
          <div className={Styles.cardText}>
            <h4 className={Styles.cardTitle}>Movie Theather</h4>
            <span className={Styles.cardSubTitle}>Website</span>
            <div className={Styles.cardTags}>
              <span className={Styles.cardTag}>Javascript</span>
              <span className={Styles.cardTag}>Vercel</span>
              <span className={Styles.cardTag}>Movies</span>
            </div>
            <p className={Styles.cardDesc}>
              A fully-featured productivity website developed with Vanilla, enabling users to see the movies possters, and search. It offers interactive UI.
            </p>
            <div className={Styles.cardBtn}>
              <Link to="https://movie-templete-website.vercel.app/"><FaLink /></Link>
              {/* <Link to="https://github.com/JMakoti/Movie-Templete-Website"><FaGithub /></Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
