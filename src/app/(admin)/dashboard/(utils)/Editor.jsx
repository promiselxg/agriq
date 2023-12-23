"use client";
import "react-quill/dist/quill.snow.css";
import React from "react";
import ReactQuill from "react-quill";

import EditorToolbar, { modules, formats } from "./EditorToolbar";

export const Editor = ({ value, setValue }) => {
  return (
    <div className="bg-white w-full shadow-sm rounded p-2 gap-2 tracking-[2px] h-[400px] overflow-hidden">
      <EditorToolbar />
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        placeholder={"Write something awesome..."}
        modules={modules}
        formats={formats}
        className="h-full"
      />
    </div>
  );
};
