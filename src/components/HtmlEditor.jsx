import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";

const HtmlEditor = ({ value, setValue }) => {
  const [open, setOpen] = useState(true);
  return (
    <div className={`editor-container ${open ? "" : "collapsed"}`}>
      <div className="editor-title">
        HTML
        <button onClick={() => setOpen(!open)}>
          {open ? <CloseFullscreenIcon /> : <OpenInFullIcon />}
        </button>
      </div>
      <CodeMirror
        style={{ textAlign: "left" }}
        height="300px"
        theme="dark"
        onChange={(value) => setValue(value)}
        value={value}
        extensions={html()}
      />
    </div>
  );
};

export default HtmlEditor;
