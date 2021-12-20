import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ChatIcon from "@material-ui/icons/Chat";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import HeaderOption from "./HeaderOption";
import Avatar from "./Avatar";
import styles from "./index.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <img
          className={styles.logo}
          src="https://image.flaticon.com/icons/png/512/174/174857.png"
          alt="Linkedin icon"
        />
        <div className={styles.headerSearch}>
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className={styles.headerRight}>
        <HeaderOption
          className={styles.headerOption}
          label="Home"
          Icon={HomeIcon}
        />
        <HeaderOption
          className={styles.headerOption}
          label="My Network"
          Icon={SupervisorAccountIcon}
        />
        <HeaderOption
          className={styles.headerOption}
          label="Jobs"
          Icon={BusinessCenterIcon}
        />
        <HeaderOption
          className={styles.headerOption}
          label="Messaging"
          Icon={ChatIcon}
        />
        <HeaderOption
          className={styles.headerOption}
          label="Notifications"
          Icon={NotificationsIcon}
        />
        <Avatar
          label="me"
          src="https://avatars.githubusercontent.com/u/26652092?v=4"
        />
      </div>
    </header>
  );
};

export default Header;
