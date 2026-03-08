import TaskMenu from "../taskMenu/TaskMenu";
import css from "./LessonLayout.module.css";
import { Outlet, useParams } from "react-router-dom";

const LessonLayout = () => {
  const { lessonId } = useParams();
  return (
    <div className={css.lessonLayout}>
      <div className={css.lessonWrap}>
        <iframe src={`/pdfs/${lessonId}.pdf`} width="60%" height="800"></iframe>
      </div>
      <div className={css.taskContent}>
        <TaskMenu/>
        <Outlet />
      </div>
    </div>
  );
};

export default LessonLayout;
