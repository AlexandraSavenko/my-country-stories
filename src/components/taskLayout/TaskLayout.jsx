import css from "./TaskLayout.module.css";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { lessonsData } from "../../data";
import LessonVideo from "../lessonVideo/LessonVideo";
import LessonGames from "../lessonGames/LessonGames";

const TaskLayout = () => {
  const { lessonId, taskId } = useParams();
  const lesson = lessonsData.find((l) => l.id === lessonId);
  const task = lesson?.tasks[taskId];
  console.log(task);
  if (!task) return <div>No task</div>;
  return (
    <div className={css.taskWrap}>
      {taskId === "video" && <LessonVideo idList={task} />}

      {taskId === "games" && <LessonGames list={task}/>}

      {taskId === "googleTest" && (
        <iframe src={task} width="100%" height="600" title="test" />
      )}
    </div>
  );
};

export default TaskLayout;
