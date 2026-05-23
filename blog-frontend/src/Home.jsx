


// import { useEffect, useState } from "react";

// function Home() {
//   const [blogs, setBlogs] = useState([]);
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");

//   const token = localStorage.getItem("token");
//   const role = localStorage.getItem("role"); // ✅ IMPORTANT

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   function fetchBlogs() {
//     fetch("http://localhost:8080/blogs", {
//       headers: {
//         Authorization: "Bearer " + token
//       }
//     })
//       .then(res => {
//         if (!res.ok) throw new Error("Unauthorized");
//         return res.json();
//       })
//       .then(data => setBlogs(data))
//       .catch(err => console.error(err));
//   }

//   function createBlog() {
//     fetch("http://localhost:8080/blogs", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer " + token
//       },
//       body: JSON.stringify({ title, content })
//     }).then(() => {
//       setTitle("");
//       setContent("");
//       fetchBlogs();
//     });
//   }

//   function deleteBlog(id) {
//     fetch(`http://localhost:8080/blogs/${id}`, {
//       method: "DELETE",
//       headers: {
//         Authorization: "Bearer " + token
//       }
//     }).then(() => fetchBlogs());
//   }

//   return (
//     <div>
//       <h2>Home - Blogs</h2>

//       {/* ✅ PROFILE */}
//       <button onClick={() => window.location.href="/profile"}>
//         Profile
//       </button>

//       {/* ✅ ADMIN BUTTON ONLY IF ADMIN */}
//       {role === "ADMIN" && (
//         <button onClick={() => window.location.href="/admin"}>
//           Admin
//         </button>
//       )}

//       {/* ✅ LOGOUT */}
//       <button onClick={() => {
//         localStorage.clear();
//         window.location.href = "/";
//       }}>
//         Logout
//       </button>

//       <hr />

//       {/* ✅ CREATE BLOG */}
//       <h3>Create Blog</h3>

//       <input
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <br />

//       <textarea
//         placeholder="Content"
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//       />
//       <br />

//       <button onClick={createBlog}>Post Blog</button>

//       <hr />

//       {/* ✅ ALL BLOGS */}
//       <h3>All Blogs</h3>

//       {blogs.length === 0 ? (
//         <p>No blogs found</p>
//       ) : (
//         blogs.map((b) => (
//           <div key={b.id} style={{ border: "1px solid black", margin: 10 }}>
//             <h4>{b.title}</h4>
//             <p>{b.content}</p>
//             <small>By: {b.author}</small>

//             <br />

//             {/* ✅ DELETE ONLY FOR ADMIN */}
//             {role === "ADMIN" && (
//               <button onClick={() => deleteBlog(b.id)}>Delete</button>
//             )}
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default Home;

import { useEffect, useState } from "react";

function Home() {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const username = localStorage.getItem("username");

  useEffect(() => {
    fetchBlogs();
  }, []);

  function fetchBlogs() {
    fetch("http://localhost:8080/blogs", {
      headers: {
        Authorization: "Bearer " + token
      }
    })
      .then(res => res.json())
      .then(data => setBlogs(data));
  }

  function createBlog() {
    fetch("http://localhost:8080/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      },
      body: JSON.stringify({ title, content })
    }).then(() => {
      setTitle("");
      setContent("");
      fetchBlogs();
    });
  }

  function deleteBlog(id) {
    fetch(`http://localhost:8080/blogs/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token
      }
    }).then(() => fetchBlogs());
  }

  function logout() {
    localStorage.clear();
    window.location.href = "/";
  }

  return (
    <div className="container mt-4">

      {/* NAVBAR */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Blog App</h2>

        <div>
          <span className="me-3">
            Welcome, <b>{username}</b>
          </span>

          <button
            className="btn btn-primary me-2"
            onClick={() => window.location.href="/profile"}
          >
            Profile
          </button>

          {role === "ADMIN" && (
            <button
              className="btn btn-dark me-2"
              onClick={() => window.location.href="/admin"}
            >
              Admin
            </button>
          )}

          <button
            className="btn btn-danger"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </div>

      {/* CREATE BLOG CARD */}
      <div className="card p-4 mb-4 shadow">
        <h4>Create Blog</h4>

        <input
          className="form-control mb-3"
          placeholder="Enter blog title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="form-control mb-3"
          rows="4"
          placeholder="Write blog content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button
          className="btn btn-success"
          onClick={createBlog}
        >
          Post Blog
        </button>
      </div>

      {/* BLOG LIST */}
      <h3 className="mb-3">All Blogs</h3>

      {blogs.length === 0 ? (
        <div className="alert alert-info">
          No blogs found
        </div>
      ) : (
        blogs.map((b) => (
          <div key={b.id} className="card mb-3 shadow-sm">
            <div className="card-body">

              <h4>{b.title}</h4>

              <p>{b.content}</p>

              <small className="text-muted">
                Posted by: {b.author}
              </small>

              <br /><br />

              {role === "ADMIN" && (
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteBlog(b.id)}
                >
                  Delete
                </button>
              )}

            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;