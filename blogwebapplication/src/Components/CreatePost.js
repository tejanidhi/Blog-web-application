import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Editor from "./Editor";
import "./CreatePost.css";

import "react-quill/dist/quill.snow.css";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [redirect, setRedirect] = useState(false);

  async function createNewPost(ev) {
    ev.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("summary", summary);
    formData.append("content", content);
    if (file) {
      formData.append("file", file);
    }

    try {
      const response = await fetch("http://localhost:5000/post", {
        method: "POST",
        body: formData,
        credentials: "include",
      });

      if (response.ok) {
        setRedirect(true);
      } else {
        console.error("Failed to create post:", response.statusText);
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  }

  if (redirect) {
    return <Navigate to={"/"} replace />;
  }

  return (
    <form className="create-post-form" onSubmit={createNewPost}>
      <input
        type="text"
        className="create-post-input"
        placeholder="Title"
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      />
      <input
        type="text"
        className="create-post-input"
        placeholder="Summary"
        value={summary}
        onChange={(ev) => setSummary(ev.target.value)}
      />
      <input
        type="file"
        className="create-post-input"
        onChange={(ev) => setFile(ev.target.files[0])}
      />
      <Editor className="create-post-editor" value={content} onChange={setContent} />
      <br />
      <button className="create-post-button" type="submit">Create post</button>
    </form>
  );
}
