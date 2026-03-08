import css from './Intro.module.css'
import { lessonsData } from '../../data'
import { Link } from 'react-router-dom'

const Intro = () => {
  return (
    <div className={css.introWrap}>
    <img className={css.heroImage} src="/hero.png" alt="hero-image-my-country-stories" />
     <ul className={css.lessonsList}>
      {
        lessonsData.map((el, index) => <li className={css.lessonCard} key={index}>
            <Link to={el.id} className={css.lessonTitle}>{el.title}</Link>{
        }</li> )
      }
    </ul> 
    </div>
    
  )
}

export default Intro
