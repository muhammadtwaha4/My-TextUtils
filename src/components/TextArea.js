import { useState } from "react";

export default function TextArea({ mode }) {
  const [text, setText] = useState("");

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  const charCount = text.length;

  const readingTimeMinutes = wordCount * 0.008;

  const upperCase = () => {
    setText(text.toUpperCase());
  };

  const lowerCase = () => {
    setText(text.toLowerCase());
  };

  const removeSpaces = () => {
    setText(text.replace(/\s+/g, " ").trim());
  };

  const clearText = () => {
    setText("");
  };

  const copyText = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="container">
      <h1>Enter the text to Analyze</h1>
      <div className="mb-3">
        <textarea
          style={{ backgroundColor: mode === "light" ? "white" : "grey",
                    color: mode === "light" ? "black" : "white"
           }}
          className="form-control"
          id="textarea"
          rows="8"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
      <button
        type="button"
        className="btn btn-info my-1 mx-1"
        onClick={upperCase}
      >
        Convert to UpperCase
      </button>
      <button
        type="button"
        className="btn btn-info my-1 mx-1"
        onClick={lowerCase}
      >
        Convert to LowerCase
      </button>
      <button
        type="button"
        className="btn btn-info my-1 mx-1"
        onClick={removeSpaces}
      >
        Romove Extra Spaces
      </button>
      <button
        type="button"
        className="btn btn-info my-1 mx-1"
        onClick={clearText}
      >
        Clear Text
      </button>
      <button
        type="button"
        className="btn btn-info my-1 mx-1"
        onClick={copyText}
      >
        Copy Text
      </button>

      <div className="my-5">
        <h2>Your Text Summary</h2>
        <p>{wordCount} Words</p>
        <p>{charCount} Charachters</p>
        <p>{readingTimeMinutes} Minutes Read</p>
      </div>

      <div className="mt-5" style={{paddingBottom : "60px"}}>
        <h3>Your Text Preview</h3>
        <p className="mb-0">{text === "" ? "Nothing to preview" : text}</p>
      </div>

    </div>
  );
}
