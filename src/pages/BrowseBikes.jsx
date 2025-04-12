import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const BrowseBikes = () => {
  const [bikes, setBikes] = useState([]);
  const [filterLocation, setFilterLocation] = useState("");
  const [filterAvailable, setFilterAvailable] = useState("");
  const navigate = useNavigate();

  const fetchBikes = async () => {
    let endpoint = "/bikes";
    if (filterLocation) endpoint = `/bikes/filter/location?location=${filterLocation}`;
    else if (filterAvailable) endpoint = `/bikes/filter/available?available=${filterAvailable}`;
    const res = await axios.get(endpoint);
    setBikes(res.data);
  };

  useEffect(() => {
    fetchBikes();
  }, [filterLocation, filterAvailable]);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Available Bikes</h2>

      <div className="flex flex-wrap gap-4 justify-center mb-6">
        <input
          type="text"
          placeholder="Filter by Location"
          value={filterLocation}
          onChange={(e) => setFilterLocation(e.target.value)}
          className="px-4 py-2 border rounded-md w-64"
        />
        <select
          onChange={(e) => setFilterAvailable(e.target.value)}
          value={filterAvailable}
          className="px-4 py-2 border rounded-md w-64"
        >
          <option value="">All Availability</option>
          <option value="true">Available</option>
          <option value="false">Unavailable</option>
        </select>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {bikes.map((bike) => (
          <div key={bike.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={bike.imageUrl || "https://via.placeholder.com/300"}
              alt={bike.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{bike.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{bike.description}</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-blue-600">₹{bike.price}</span>
                <span className="text-gray-500 text-sm">{bike.location}</span>
              </div>
              <button
                onClick={() => navigate(`/booking/${bike.id}`)}
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseBikes;