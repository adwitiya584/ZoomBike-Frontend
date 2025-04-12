import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../api/axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Booking = () => {
  const { bikeId } = useParams();
  const navigate = useNavigate();
  const [bike, setBike] = useState(null);
  const userEmail = localStorage.getItem("userEmail");

  useEffect(() => {
    const fetchBike = async () => {
      const res = await axios.get(`/bikes/${bikeId}`);
      setBike(res.data);
    };
    fetchBike();
  }, [bikeId]);

  const handleBooking = async () => {
    try {
      await axios.post("/bookings", {
        bikeId: bike.id,
        userEmail: userEmail,
      });
      toast.success("Booking confirmed! 🚴", { position: "top-center" });
      setTimeout(() => navigate("/dashboard"), 2000);
    } catch (error) {
      toast.error("Booking failed. Please try again.", { position: "top-center" });
    }
  };

  if (!bike) return <div className="text-center mt-10 text-gray-600">Loading bike details...</div>;

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8 flex justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-xl w-full">
        <img
          src={bike.imageUrl || "https://via.placeholder.com/400"}
          alt={bike.name}
          className="w-full h-60 object-cover rounded-md mb-4"
        />
        <h2 className="text-2xl font-bold text-blue-600 mb-2">{bike.name}</h2>
        <p className="text-gray-600 mb-2">{bike.description}</p>
        <p className="text-gray-700 font-semibold mb-2">Location: {bike.location}</p>
        <p className="text-xl font-bold text-blue-700 mb-4">Price: ₹{bike.price}</p>
        <button
          onClick={handleBooking}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default Booking;