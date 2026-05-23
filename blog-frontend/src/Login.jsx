
// import { useState } from "react";
// import { Link } from "react-router-dom";

// function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   function login() {
//     fetch("http://localhost:8080/auth/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({ username, password })
//     })
//       .then(res => {
//         if (!res.ok) throw new Error("Login failed");
//         return res.text(); // token comes here
//       })
//       .then(token => {
//         localStorage.setItem("token", token);
//         localStorage.setItem("username", username);

//         // ✅ Decode token to extract role
//         const payload = JSON.parse(atob(token.split(".")[1]));
//         localStorage.setItem("role", payload.role);

//         window.location.href = "/home";
//       })
//       .catch(err => alert(err.message));
//   }

//   return (
//     <div>
//       <h2>Login</h2>

//       <input
//         placeholder="Username"
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <br /><br />

//       <input
//         type="password"
//         placeholder="Password"
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <br /><br />

//       <button onClick={login}>Login</button>

//       {/* ✅ Register Link */}
//       <p style={{ marginTop: "10px" }}>
//         New user? <Link to="/register">Register here</Link>
//       </p>
//     </div>
//   );
// }

// export default Login;


import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    })
      .then(res => {
        if (!res.ok) throw new Error("Login failed");
        return res.text();
      })
      .then(token => {

        localStorage.setItem("token", token);
        localStorage.setItem("username", username);

        const payload = JSON.parse(atob(token.split(".")[1]));
        localStorage.setItem("role", payload.role);

        window.location.href = "/home";
      })
      .catch(err => alert(err.message));
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">

      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Login</h2>

        <input
          className="form-control mb-3"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="btn btn-primary w-100"
          onClick={login}
        >
          Login
        </button>

        <p className="text-center mt-3">
          New user? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;