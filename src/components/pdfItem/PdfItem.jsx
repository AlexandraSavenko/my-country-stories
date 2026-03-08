import css from "./PdfItem.module.css";

const PdfItem = ({ url }) => {
  return (
      <iframe className={css.pdf} src={url} width="60%" height="500"></iframe>
  );
};

export default PdfItem;
