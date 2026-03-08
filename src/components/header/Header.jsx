import css from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={`${css.header}`}>
      <NavLink
        className={({ isActive }) =>
          `${isActive ? css.activeLink : ""} ${css.link}`
        }
        to={"/"}
      >Меню</NavLink>
    </div>
  );
};

export default Header;
