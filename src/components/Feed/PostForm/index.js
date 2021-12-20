import {
  Create as CreateIcon,
  Image as ImageIcon,
  YouTube as YouTubeIcon,
  Event as EventIcon,
  Description as DescriptionIcon,
} from "@material-ui/icons";
import { useState } from "react";
import styles from "./index.module.css";

const FormOption = ({ Icon, label, color = "red" }) => {
  return (
    <div className={styles.option}>
      {Icon && <Icon style={{ color: color }} />}
      <span>{label}</span>
    </div>
  );
};
const PostForm = ({ onFormSubmit }) => {
  const [message, setMessage] = useState("");
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (message.length < 1) return;
    onFormSubmit({ message });
    setMessage("");
  };
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <CreateIcon />
        <form onSubmit={formSubmitHandler}>
          <input
            type="text"
            placeholder="Write your text and press Enter key"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" hidden={true}>
            Send
          </button>
        </form>
      </div>
      <div className={styles.options}>
        <FormOption Icon={ImageIcon} color="blue" label="Photo" />
        <FormOption label="Video" Icon={YouTubeIcon} color="green" />
        <FormOption label="Event" Icon={EventIcon} color="orange" />
        <FormOption label="Write article" Icon={DescriptionIcon} color="pink" />
      </div>
    </div>
  );
};

export default PostForm;
