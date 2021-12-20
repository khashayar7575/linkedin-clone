import styles from "./index.module.css";
const SidebarItem = ({ text }) => {
  return (
    <div className={styles.sidebarItem}>
      <p>
        <span>#</span>
        {text}
      </p>
    </div>
  );
};

export default SidebarItem;
