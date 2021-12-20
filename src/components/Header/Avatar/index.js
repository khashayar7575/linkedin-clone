import styles from "./index.module.css";
const Avatar = ({ label, src }) => {
  return (
    <div className={styles.avatar}>
      <img className={styles.img} src={src} alt={label} />
      <span className={styles.title}>{label}</span>
    </div>
  );
};

export default Avatar;
