import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import BrowseBikes from "./pages/BrowseBikes";
import Booking from "./pages/Booking";
import Dashboard from "./pages/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "./api/axios";

const ListBike = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    price: "",
    description: "",
  });
  const [imageFile, setImageFile] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      form.append(key, value);
    });
    if (imageFile) {
      form.append("image", imageFile);
    }
    try {
      await axios.post("/bikes", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Bike listed successfully!");
      setFormData({ name: "", location: "", price: "", description: "" });
      setImageFile(null);
    } catch (error) {
      alert("Error listing bike.");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8 flex justify-center">
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">List Your Bike</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Bike Name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none" />
          <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none" />
          <input type="number" name="price" placeholder="Price per day (₹)" value={formData.price} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none" />
          <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required rows="3" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none" />
          <input type="file" accept="image/*" onChange={handleImageChange} className="w-full px-4 py-2 border rounded-md bg-white" />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">Submit</button>
        </form>
      </div>
    </div>
  );
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="app-container">
        {isAuthenticated && <Navbar onLogout={handleLogout} />}
        <Routes>
          {/* ✅ Login route now explicitly added */}
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/browse-bikes" element={isAuthenticated ? <BrowseBikes /> : <Navigate to="/login" />} />
          <Route path="/booking/:bikeId" element={isAuthenticated ? <Booking /> : <Navigate to="/login" />} />
          <Route path="/list-bike" element={isAuthenticated ? <ListBike /> : <Navigate to="/login" />} />
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
