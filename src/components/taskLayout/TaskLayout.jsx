import css from "./TaskLayout.module.css";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { lessonsData } from "../../data";
import LessonVideo from "../lessonVideo/LessonVideo";
import LessonGames from "../lessonGames/LessonGames";
import LessonQu from "../lessonQu/LessonQu";
import PdfItem from "../pdfItem/PdfItem";

const TaskLayout = () => {
  const { lessonId, taskId } = useParams();
  const lesson = lessonsData.find((l) => l.id === lessonId);
  const task = lesson?.tasks[taskId];
  return (
    <div className={css.taskWrap}>
      {taskId === "questions" && <PdfItem url={`/pdfs/${lessonId}Q.pdf`}/>}
      {taskId === "video" && <LessonVideo idList={task} />}

      {taskId === "games" && <LessonGames list={task} />}

      {taskId === "googleTest" && (
       <PdfItem url={task}/>
      )}
    </div>
  );
};

export default TaskLayout;
