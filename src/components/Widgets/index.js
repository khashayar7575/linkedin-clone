import { Info as InfoIcon } from "@material-ui/icons";
import styles from "./index.module.css";
import NewsArticle from "./NewsArticle";

const Widgets = ({ className }) => {
  return (
    <div className={`${styles.widgets} ${className}`}>
      <div className={styles.header}>
        <h2>Linkedin News</h2>
        <InfoIcon />
      </div>
      <NewsArticle subtitle="Top news" heading="Linkedin clone by abbas" />
      <NewsArticle subtitle="Top news" heading="Linkedin clone by abbas" />
      <NewsArticle subtitle="Top news" heading="Linkedin clone by abbas" />
      <NewsArticle subtitle="Top news" heading="Linkedin clone by abbas" />
    </div>
  );
};

export default Widgets;
