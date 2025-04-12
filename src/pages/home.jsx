// src/pages/Home.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Add login validation logic
    navigate("/browse-bikes");
  };

  return (
    <div className="home-login">
      <h2>Welcome to ZoomBike</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p>New user? <Link to="/signup">Signup now</Link></p>
    </div>
  );
};

export default Home;
