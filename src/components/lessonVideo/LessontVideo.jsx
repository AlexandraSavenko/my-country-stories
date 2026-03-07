import css from './LessonVideo.module.css'
import { useParams } from 'react-router-dom'
import { lessonsData } from '../../data'

const LessontVideo = () => {
  const {lessonId} = useParams()
  const lesson = lessonsData.find(l => l.id === lessonId)
  console.log(lesson.video)
  return (
    <ul className={css.videoBox}>
      {lesson.video.map((el, index) => <li key={index}>
        <iframe
        id="video"
        width="800"
        height="600"
        src={`https://www.youtube.com/embed/${el.url}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboardWrite; encryptedMedia; gyroscope; pictureInPicture; webShare"
        referrerpolicy="strictOriginWhenCrossOrigin"
        allowfullscreen
      ></iframe>
      </li> )}
      
    </ul>
  )
}

export default LessontVideo
