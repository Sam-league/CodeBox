import { useEffect, useState } from "react";
import CssEditor from "./components/CssEditor";
import HtmlEditor from "./components/HtmlEditor";
import JsEditor from "./components/JsEditor";
import { javascript } from "@codemirror/lang-javascript";
import { css } from "@codemirror/lang-css";
import { html } from "@codemirror/lang-html";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
    </html>
      `);
    }, 250);
    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <div className="wrapper">
      <div className="top-pane">
        <HtmlEditor value={html} setValue={setHtml} />
        <CssEditor value={css} setValue={setCss} />
        <JsEditor value={js} setValue={setJs} />
      </div>
      <div className="bottom-pane">
        <iframe
          title="output"
          sandbox="allow-scripts"
          srcDoc={srcDoc}
          frameBorder={0}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default App;
