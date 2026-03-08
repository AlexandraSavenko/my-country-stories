import css from './LessonVideo.module.css'

const LessonVideo = ({idList}) => {
  return (
    <ul className={css.videoBox}>
      {idList.map((id) => <li key={id}>
        <iframe
        id="video"
        width="100%"
        height="600"
        src={`https://www.youtube.com/embed/${id.url}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strictOriginWhenCrossOrigin"
        allowfullscreen
      ></iframe>
      </li> )}
      
    </ul>
  )
}

export default LessonVideo
