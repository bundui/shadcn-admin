/* "use client";

import { FC } from "react";
import { MDXEditor, MDXEditorMethods, headingsPlugin } from "@mdxeditor/editor";

interface EditorProps {
  markdown: string;
  editorRef?: React.MutableRefObject<MDXEditorMethods | null>;
}

const Editor: FC<EditorProps> = ({ markdown, editorRef }) => {
  return <MDXEditor onChange={(e) => console.log(e)} ref={editorRef} markdown={markdown} />;
};

export default Editor; */
