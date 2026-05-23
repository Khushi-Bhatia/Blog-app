import { useState } from "react";

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const token = localStorage.getItem("token");

  function handleSubmit() {
    fetch("http://localhost:8080/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      },
      body: JSON.stringify({ title, content })
    }).then(() => {
      window.location.href = "/home";
    });
  }

  return (
    <div>
      <h2>Create Blog</h2>

      <input
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Content"
        onChange={(e) => setContent(e.target.value)}
      />

      <button onClick={handleSubmit}>Post</button>
    </div>
  );
}

export default CreateBlog;