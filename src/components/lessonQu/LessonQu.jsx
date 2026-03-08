import React from 'react'

const LessonQu = ({lessonId}) => {
  return (
    <div>
      <iframe src={`/pdfs/${lessonId}Q.pdf`} width="100%" height="600"></iframe>
    </div>
  )
}

export default LessonQu
