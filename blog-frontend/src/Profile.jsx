// import { useEffect, useState } from "react";

// function Profile() {
//   const [user, setUser] = useState(null);
//   const [blogs, setBlogs] = useState([]);

//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     fetch("http://localhost:8080/user/profile", {
//       headers: { Authorization: "Bearer " + token }
//     })
//       .then(res => res.json())
//       .then(setUser);

//     fetch("http://localhost:8080/user/my-blogs", {
//       headers: { Authorization: "Bearer " + token }
//     })
//       .then(res => res.json())
//       .then(setBlogs);
//   }, []);

//   return (
//     <div>
//       <h2>Profile</h2>
//       {user && <p>{user.username} ({user.email})</p>}

//       <h3>My Blogs</h3>
//       {blogs.map(b => <p key={b.id}>{b.title}</p>)}
//     </div>
//   );
// }

// export default Profile;


function Profile() {
  const username = localStorage.getItem("username");

  return (
    <div>
      <h2>Profile Page</h2>

      <p>Username: {username}</p>

      <button onClick={() => window.location.href="/home"}>
        Back to Home
      </button>

      <button onClick={() => {
        localStorage.clear();
        window.location.href = "/";
      }}>
        Logout
      </button>
    </div>
  );
}

export default Profile;