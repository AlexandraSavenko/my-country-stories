import PdfItem from "../pdfItem/PdfItem";
import TaskMenu from "../taskMenu/TaskMenu";
import css from "./LessonLayout.module.css";
import { Outlet, useParams } from "react-router-dom";

const LessonLayout = () => {
  const { lessonId } = useParams();
  return (
    <div className={css.lessonLayout}>
      <div className={css.lessonWrap}>
        <PdfItem url={`/pdfs/${lessonId}.pdf`}/>
        {/* <iframe src={`/pdfs/${lessonId}.pdf`} width="60%" height="300"></iframe> */}
      </div>
      <div className={css.taskBox}>
        <TaskMenu/>
        <Outlet />
      </div>
    </div>
  );
};

export default LessonLayout;
