import css from "./TaskMenu.module.css";
import { useParams, NavLink } from "react-router-dom";
import { lessonsData } from "../../data";

const labels = {
  map: "Карта",
  googleTest: "Тест",
  video: "Відео",
  games: "Ігри",
};
const TaskMenu = () => {
  const { lessonId } = useParams();
  const lesson = lessonsData.find((l) => l.id === lessonId);
  const taskList = Object.entries(lesson.tasks);
  return (
    <nav className={css.nav}>
      <NavLink
        className={({ isActive }) =>
          `${isActive ? css.active : ""} ${css.navLink}`
        }
        to={"questions"}
      >
        Завдання
      </NavLink>
      {taskList.map((el) => (
        <NavLink
          className={({ isActive }) =>
            `${isActive ? css.active : ""} ${css.navLink}`
          }
          to={el[0]}
          key={el[0]}
        >
          {labels[el[0]]}
        </NavLink>
      ))}
    </nav>
  );
};

export default TaskMenu;
