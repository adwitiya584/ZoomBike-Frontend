import React, { useEffect, useState } from "react";
import axios from "../api/axios";


const Dashboard = () => {
  const [bookings, setBookings] = useState([]);
  const userEmail = localStorage.getItem("userEmail") || "demo@example.com";

  useEffect(() => {
    const fetchBookings = async () => {
      const res = await axios.get(`/bookings/user/${userEmail}`);
      setBookings(res.data);
    };
    fetchBookings();
  }, [userEmail]);

  return (
    <div className="dashboard-container">
      <h2>Your Bookings</h2>
      {bookings.length === 0 ? <p>No bookings yet.</p> : (
        <ul>
          {bookings.map((b) => (
            <li key={b.id}>
              Bike ID: {b.bikeId} | Booked on: {b.bookingDate}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
