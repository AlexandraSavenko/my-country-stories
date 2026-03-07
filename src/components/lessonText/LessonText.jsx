import css from './LessonText.module.css'
import { useParams } from 'react-router-dom'
// import { lessonsData } from '../../data'

const LessonText = () => {
  const {lessonId} = useParams()
  // const lesson = lessonsData.find(l => l.id === lessonId)
  return (
    <div className={css.lessonWrap}>
      <iframe src={`/pdfs/${lessonId}.pdf`} width="60%" height="800"></iframe>
      <iframe src={`/pdfs/lesson1Q.pdf`} width="60%" height="800"></iframe>
    </div>
  )
}

export default LessonText
