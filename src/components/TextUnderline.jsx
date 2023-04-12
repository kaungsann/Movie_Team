import { useState } from "react";

function TextUnderline() {
  const [selectedText, setSelectedText] = useState("");

  const handleClick = (text) => {
    setSelectedText(text);
  };

  return (
    <div>
      <p
        style={{
          textDecoration: selectedText === "First Text" ? "underline" : "none",
        }}
        onClick={() => handleClick("First Text")}
      >
        First Text
      </p>
      <p
        style={{
          textDecoration: selectedText === "Second Text" ? "underline" : "none",
        }}
        onClick={() => handleClick("Second Text")}
      >
        Second Text
      </p>
      <p
        style={{
          textDecoration: selectedText === "Third Text" ? "underline" : "none",
        }}
        onClick={() => handleClick("Third Text")}
      >
        Third Text
      </p>
    </div>
  );
}

export default TextUnderline;
