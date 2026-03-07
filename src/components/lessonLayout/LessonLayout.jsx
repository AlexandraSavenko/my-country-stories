import css from './LessonLayout.module.css'
import { Outlet } from 'react-router-dom'

const LessonLayout = () => {
  return (
    <div className={css.lessonLayout}>
      <Outlet/>
    </div>
  )
}

export default LessonLayout
