import React, { useState } from "react";
import styles from "./Back.module.css";

function BackToTop() {
  const [show, setShow] = useState(false);

  window.addEventListener("scroll", () => {
    let currScrollPos = window.pageYOffset;

    if (currScrollPos >= 500) {
      setShow(true);
    } else if (currScrollPos <= 499) {
      setShow(false);
    }
  });
  return (
    <button
      className={`btn ${show ? "" : "hidden"} bg-blue-600 text-white ${
        styles.btnTop
      } hover:bg-blue-500`}
      onClick={() => {
        window.scrollTo(0, 0);
      }}>
      ^
    </button>
  );
}

export default BackToTop;
