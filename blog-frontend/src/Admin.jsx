// import { useEffect, useState } from "react";

// function Admin() {
//   const [users, setUsers] = useState([]);

//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     fetch("http://localhost:8080/admin/users", {
//       headers: { Authorization: "Bearer " + token }
//     })
//       .then(res => res.json())
//       .then(setUsers);
//   }, []);

//   return (
//     <div>
//       <h2>Admin Panel</h2>

//       {users.map(u => (
//         <div key={u.id}>
//           {u.username}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Admin;

//************************ */
// import { useEffect, useState } from "react";

// function Admin() {
//   const [blogs, setBlogs] = useState([]);
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     fetch("http://localhost:8080/blogs", {
//       headers: {
//         "Authorization": "Bearer " + token
//       }
//     })
//       .then(res => res.json())
//       .then(data => setBlogs(data));
//   }, []);

//   function deleteBlog(id) {
//     fetch(`http://localhost:8080/blogs/${id}`, {
//       method: "DELETE",
//       headers: {
//         "Authorization": "Bearer " + token
//       }
//     }).then(() => {
//       setBlogs(blogs.filter(b => b.id !== id));
//     });
//   }

//   return (
//     <div>
//       <h2>Admin Panel</h2>

//       <button onClick={() => window.location.href="/home"}>
//         Back to Home
//       </button>

//       <h3>All Blogs (Admin Control)</h3>

//       {blogs.map((b) => (
//         <div key={b.id} style={{ border: "1px solid red", margin: 10 }}>
//           <h4>{b.title}</h4>
//           <p>{b.content}</p>
//           <small>{b.author}</small>

//           <br />

//           <button onClick={() => deleteBlog(b.id)}>
//             Delete (Admin)
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Admin;
//****************************8 */

import { useEffect, useState } from "react";

function Admin() {
  const [blogs, setBlogs] = useState([]);
  const token = localStorage.getItem("token");

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

  function deleteBlog(id) {
    fetch(`http://localhost:8080/blogs/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token
      }
    })
      .then(() => fetchBlogs())
      .catch(() => alert("Only ADMIN can delete"));
  }

  return (
    <div>
      <h2>Admin Panel</h2>

      {blogs.map((b) => (
        <div key={b.id} style={{ border: "1px solid red", margin: 10 }}>
          <h4>{b.title}</h4>
          <p>{b.content}</p>
          <small>{b.author}</small>

          <br />

          <button onClick={() => deleteBlog(b.id)}>
            Delete (Admin Only)
          </button>
        </div>
      ))}
    </div>
  );
}

export default Admin;