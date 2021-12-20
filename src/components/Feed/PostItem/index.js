import { Avatar } from "@material-ui/core";
import {
  ThumbUpAltOutlined as ThumbUpAltOutlinedIcon,
  ChatOutlined as ChatOutlinedIcon,
  ShareOutlined as ShareOutlinedIcon,
  SendOutlined as SendOutlinedIcon,
} from "@material-ui/icons";
import styles from "./index.module.css";

const PostItemAction = ({ Icon, label, color = "gray" }) => {
  return (
    <div className={styles.action}>
      {Icon && <Icon style={{ color: color }} />} <span>{label}</span>
    </div>
  );
};

const PostItem = ({ name, description, message, photoUrl }) => {
  return (
    <div className={styles.postItem}>
      <div className={styles.header}>
        <Avatar src={photoUrl || ""} />
        <div className={styles.info}>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className={styles.body}>
        <p>{message}</p>
      </div>

      <div className={styles.actions}>
        <PostItemAction
          Icon={ThumbUpAltOutlinedIcon}
          color="gray"
          label="Like"
        />
        <PostItemAction Icon={ChatOutlinedIcon} color="gray" label="Comment" />
        <PostItemAction Icon={ShareOutlinedIcon} color="gray" label="Share" />
        <PostItemAction Icon={SendOutlinedIcon} color="gray" label="Send" />
      </div>
    </div>
  );
};

export default PostItem;
