import css from "./LessonGames.module.css";

const LessonGames = ({ list }) => {
  return (
    <ul className={css.videoBox}>
      {list.map((el, index) => (
        <li key={index}>
          <iframe
            src={el.url}
            style={{ border: "0px", width: "100%", height: "500px" }}
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
          ></iframe>
        </li>
      ))}
    </ul>
  );
};

export default LessonGames;
