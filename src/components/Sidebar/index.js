import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectAuthUser } from "../../store/authSlice";
import SidebarItem from "./SidebarItem";
import styles from "./index.module.css";
const Sidebar = ({ className }) => {
  const authUser = useSelector(selectAuthUser);
  return (
    <aside className={`${styles.sidebar} ${className}`}>
      <div className={styles.sidebarTop}>
        <img
          className={styles.sidebarTopBackImg}
          src="https://static-exp1.licdn.com/sc/h/9e0ckeb27mzi70ne80f4hv7il"
          alt=""
        />
        <Avatar
          className={styles.siebarAvatar}
          src={authUser?.photoURL || ""}
        />
        <h2>{authUser?.displayName}</h2>
        <h4>{authUser?.email}</h4>
      </div>
      <div className={styles.sidebarStats}>
        <div className={styles.sidebarStat}>
          <p>Who viewed you</p>
          <p className={styles.sidebarStatNumber}>22</p>
        </div>
        <div className={styles.sidebarStat}>
          <p>Views on post</p>
          <p className={styles.sidebarStatNumber}>232</p>
        </div>
      </div>
      <div className={styles.sidebarBottom}>
        <p className={styles.sidebarBottomTitle}>Recent</p>
        <SidebarItem text="reactjs" />
        <SidebarItem text="programming" />
        <SidebarItem text="softwareengineering" />
        <SidebarItem text="design" />
        <SidebarItem text="developer" />
      </div>
    </aside>
  );
};

export default Sidebar;
