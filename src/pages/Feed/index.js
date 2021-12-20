import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import FeedComponent from "../../components/Feed";
import Widgets from "../../components/Widgets";
import styles from "./index.module.css";
function Feed() {
  return (
    <React.Fragment>
      <Header />
      <main className={styles.main}>
        <Sidebar className={styles.sidebar} />
        <FeedComponent className={styles.feedComponent} />
        <Widgets className={styles.widgets} />
      </main>
    </React.Fragment>
  );
}

export default Feed;
