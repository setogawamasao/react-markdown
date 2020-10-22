import React from "react";
import ReactMarkdown from "react-markdown/with-html";

const App = () => {
  const markdown =
    "# 見出し 1\n" +
    "## 見出し 2\n" +
    "### 見出し 3\n" +
    "#### 見出し 4\n" +
    "---\n" +
    "- リスト 1\n" +
    "- リスト 2\n" +
    "- リスト 2-1\n" +
    "1. 番号付きリスト 1\n" +
    "2. 番号付きリスト 2\n" +
    "3. 番号付きリスト 3\n" +
    "[リンク](http://...)\n" +
    "**強調**\n" +
    "<h1>HTMLで表示する</h1>";

  return (
    <>
      <h1>Hello react-markdown</h1>
      <div>escapeHtml:falseでHTMLタグが有効となる</div>
      <ReactMarkdown source={markdown} escapeHtml={false} />
    </>
  );
};

export default App;
