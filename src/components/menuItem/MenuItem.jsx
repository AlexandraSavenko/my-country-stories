import { Link } from "react-router-dom";
import css from "./MenuItem.module.css";

const MenuItem = ({ number }) => {
  return (
    <ul className={css.list}>
      <li>
        <Link to={`${number}/text`}>Урок</Link>
      </li>
      <li>
        <Link to={`${number}/video`}>Відео</Link>
      </li>
      <li>
        <Link to={`${number}/games`}>Ігри</Link>
      </li>
      <li>
        <Link to={`${number}/test`}>Тест</Link>
      </li>
    </ul>
  );
};

export default MenuItem;
