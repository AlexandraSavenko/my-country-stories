import css from './LessonGames.module.css'
import { useParams } from 'react-router-dom'
import { lessonsData } from '../../data'

const LessonGames = () => {
  const {lessonId} = useParams()
  const lesson = lessonsData.find(l => l.id === lessonId)
  console.log(lesson.video)
  return (
    <ul className={css.videoBox}>
      {lesson.games.map((el, index) => <li key={index}>
        <iframe
       src={el.url}
              style={{ border: "0px", width: "100%", height: "500px" }}
              allowfullscreen="true"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
      ></iframe>
      </li> )}
      
    </ul>)
}

export default LessonGames
