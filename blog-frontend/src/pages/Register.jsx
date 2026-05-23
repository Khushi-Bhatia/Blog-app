// // import { useState } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";

// // function Register() {
// //   const [username, setUsername] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [email, setEmail] = useState("");

// //   const navigate = useNavigate();

// //   const handleRegister = async () => {
// //     await axios.post("http://localhost:8080/auth/register", {
// //       username,
// //       password,
// //       email
// //     });

// //     alert("Registered!");
// //     navigate("/");
// //   };

// //   return (
// //     <div>
// //       <h2>Register</h2>
// //       <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
// //       <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
// //       <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

// //       <button onClick={handleRegister}>Register</button>
// //     </div>
// //   );
// // }

// // export default Register;

// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";

// function Register() {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     username: "",
//     email: "",
//     password: ""
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     const res = await fetch("http://localhost:8080/auth/register", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(form),
//     });

//     if (res.ok) {
//       navigate("/");
//     } else {
//       alert("Registration failed");
//     }
//   };

//   return (
//     <div>
//       <h2>Register</h2>

//       <form onSubmit={handleRegister}>
//         <input name="username" placeholder="Username" onChange={handleChange} />
//         <br />
//         <input name="email" placeholder="Email" onChange={handleChange} />
//         <br />
//         <input name="password" type="password" placeholder="Password" onChange={handleChange} />
//         <br />
//         <button type="submit">Register</button>
//       </form>

//       <p>
//         Already have account? <Link to="/">Login</Link>
//       </p>
//     </div>
//   );
// }

// export default Register;

// import { useState } from "react";


// function Register() {
//   const [form, setForm] = useState({
//     username: "",
//     password: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     fetch("http://localhost:8080/auth/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(form),
//     })
//       .then((res) => res.json())
//       .then(() => {
//         alert("Registered successfully!");
//         window.location.href = "/"; // go to login
//       });
//   };

//   return (
//     <div>
//       <h2>Register</h2>

//       <form onSubmit={handleSubmit}>
//         <input
//           placeholder="Username"
//           onChange={(e) =>
//             setForm({ ...form, username: e.target.value })
//           }
//         />
//         <br /><br />

//         <input
//           type="password"
//           placeholder="Password"
//           onChange={(e) =>
//             setForm({ ...form, password: e.target.value })
//           }
//         />
//         <br /><br />

//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }

// export default Register;

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(errText || "Registration failed");
      }

      alert("Registered successfully ✅");

      // go back to login
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>

      <form onSubmit={handleRegister}>
        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <br /><br />

        <button type="submit">Register</button>
      </form>

      {/* ✅ Back to login */}
      <p style={{ marginTop: "10px" }}>
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
}

export default Register;