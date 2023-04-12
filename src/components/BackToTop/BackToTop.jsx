import React from "react";
import styles from "./Back.module.css";

function BackToTop() {
  return (
    <button
      className={`btn bg-blue-600 text-white ${styles.btnTop} hover:bg-blue-500`}
      onClick={() => {}}>
      ^
    </button>
  );
}

export default BackToTop;
