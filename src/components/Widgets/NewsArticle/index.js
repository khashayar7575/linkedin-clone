import { FiberManualRecord as FiberManualRecordIcon } from "@material-ui/icons";
import styles from "./index.module.css";
const NewsArticle = ({ heading, subtitle }) => {
  return (
    <div className={styles.article}>
      <div className={styles.articleLeft}>
        <FiberManualRecordIcon style={{ fontSize: "14px" }} />
      </div>
      <div className={styles.articleRight}>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default NewsArticle;
