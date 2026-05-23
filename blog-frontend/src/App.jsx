

// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import Login from "./pages/Login";
// // import Register from "./pages/Register";
// // import Home from "./pages/Home";

// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <Routes>
// //         <Route path="/" element={<Login />} />
// //         <Route path="/register" element={<Register />} />
// //         <Route path="/home" element={<Home />} />
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }

// //  export default App;

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./Login";
// import Register from "./Register";
// import Home from "./Home";
// import CreateBlog from "./CreateBlog";
// import Profile from "./Profile";
// import Admin from "./Admin";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/create" element={<CreateBlog />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/admin" element={<Admin />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Profile from "./Profile";
import Admin from "./Admin";
import Register from "./pages/Register";
// import Admin from "./pages/Admin";

<Routes>
  <Route path="/" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/home" element={<Home />} />
  <Route path="/profile" element={<Profile />} />
  <Route path="/admin" element={<Admin />} />
</Routes>

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
         <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;