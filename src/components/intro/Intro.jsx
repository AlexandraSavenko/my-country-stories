import css from './Intro.module.css'
import MenuItem from '../menuItem/MenuItem'
import { lessonsData } from '../../data'

const Intro = () => {
  return (
    <div>
    <img className={css.heroImage} src="/hero.png" alt="hero-image-my-country-stories" />
     <ul className={css.lessonsList}>
      {
        lessonsData.map((el, index) => <li className={css.lessonCard} key={index}>
            <h2 className={css.lessonTitle}>{el.title}</h2>{
            <MenuItem number={el.id}/>
        }</li> )
      }
    </ul> 
    </div>
    
  )
}

export default Intro
