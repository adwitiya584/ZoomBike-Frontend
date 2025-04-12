// // // // ✅ ListBike.jsx (Updated with Toasts and Error Logging)
// // // import React, { useState } from "react";
// // // import axios from "../api/axios";
// // // import { toast } from "react-toastify";

// // // const ListBike = () => {
// // //   const [formData, setFormData] = useState({
// // //     name: "",
// // //     location: "",
// // //     price: "",
// // //     description: "",
// // //   });
// // //   const [imageFile, setImageFile] = useState(null);

// // //   const handleChange = (e) => {
// // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // //   };

// // //   const handleImageChange = (e) => {
// // //     setImageFile(e.target.files[0]);
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     const form = new FormData();
// // //     Object.entries(formData).forEach(([key, value]) => {
// // //       form.append(key, value);
// // //     });
// // //     if (imageFile) {
// // //       form.append("image", imageFile);
// // //     }
// // //     try {
// // //       await axios.post("/bikes/upload", form, {
// // //         headers: { "Content-Type": "multipart/form-data" },
// // //       });
// // //       toast.success("✅ Bike listed successfully!");
// // //       setFormData({ name: "", location: "", price: "", description: "" });
// // //       setImageFile(null);
// // //     } catch (error) {
// // //       console.error("Bike Upload Error:", error);
// // //       toast.error("❌ Error listing bike. Check backend logs.");
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gray-100 px-4 py-8 flex justify-center">
// // //       <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-8">
// // //         <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">List Your Bike</h2>
// // //         <form onSubmit={handleSubmit} className="space-y-4">
// // //           <input
// // //             type="text"
// // //             name="name"
// // //             placeholder="Bike Name"
// // //             value={formData.name}
// // //             onChange={handleChange}
// // //             required
// // //             className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
// // //           />
// // //           <input
// // //             type="text"
// // //             name="location"
// // //             placeholder="Location"
// // //             value={formData.location}
// // //             onChange={handleChange}
// // //             required
// // //             className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
// // //           />
// // //           <input
// // //             type="number"
// // //             name="price"
// // //             placeholder="Price per day (₹)"
// // //             value={formData.price}
// // //             onChange={handleChange}
// // //             required
// // //             className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
// // //           />
// // //           <textarea
// // //             name="description"
// // //             placeholder="Description"
// // //             value={formData.description}
// // //             onChange={handleChange}
// // //             required
// // //             rows="3"
// // //             className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
// // //           />
// // //           <input
// // //             type="file"
// // //             accept="image/*"
// // //             onChange={handleImageChange}
// // //             className="w-full px-4 py-2 border rounded-md bg-white"
// // //           />
// // //           <button
// // //             type="submit"
// // //             className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
// // //           >
// // //             Submit
// // //           </button>
// // //         </form>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ListBike;
// // // ✅ ListBike.jsx (Using Image URL instead of file upload)
// // // import React, { useState } from "react";
// // // import axios from "../api/axios";
// // // import { toast } from "react-toastify";

// // // const ListBike = () => {
// // //   const [formData, setFormData] = useState({
// // //     name: "",
// // //     location: "",
// // //     price: "",
// // //     description: "",
// // //     imageUrl: "",
// // //   });

// // //   const handleChange = (e) => {
// // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       await axios.post("/bikes/upload", formData);
// // //       toast.success("✅ Bike listed successfully!");
// // //       setFormData({ name: "", location: "", price: "", description: "", imageUrl: "" });
// // //     } catch (error) {
// // //       console.error("Bike Upload Error:", error);
// // //       toast.error("❌ Error listing bike. Check backend logs.");
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gray-100 px-4 py-8 flex justify-center">
// // //       <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-8">
// // //         <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">List Your Bike</h2>
// // //         <form onSubmit={handleSubmit} className="space-y-4">
// // //           <input
// // //             type="text"
// // //             name="name"
// // //             placeholder="Bike Name"
// // //             value={formData.name}
// // //             onChange={handleChange}
// // //             required
// // //             className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
// // //           />
// // //           <input
// // //             type="text"
// // //             name="location"
// // //             placeholder="Location"
// // //             value={formData.location}
// // //             onChange={handleChange}
// // //             required
// // //             className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
// // //           />
// // //           <input
// // //             type="number"
// // //             name="price"
// // //             placeholder="Price per day (₹)"
// // //             value={formData.price}
// // //             onChange={handleChange}
// // //             required
// // //             className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
// // //           />
// // //           <textarea
// // //             name="description"
// // //             placeholder="Description"
// // //             value={formData.description}
// // //             onChange={handleChange}
// // //             required
// // //             rows="3"
// // //             className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
// // //           />
// // //           <input
// // //             type="text"
// // //             name="imageUrl"
// // //             placeholder="Image URL"
// // //             value={formData.imageUrl}
// // //             onChange={handleChange}
// // //             className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
// // //           />
// // //           <button
// // //             type="submit"
// // //             className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
// // //           >
// // //             Submit
// // //           </button>
// // //         </form>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ListBike;
// // import React, { useState } from "react";
// // import axios from "../api/axios";
// // import { toast } from "react-toastify";

// // const ListBike = () => {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     location: "",
// //     price: "",
// //     description: "",
// //     imageUrl: "",
// //   });

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await axios.post("/bikes/upload", formData);
// //       toast.success("✅ Bike listed successfully!");
// //       setFormData({
// //         name: "",
// //         location: "",
// //         price: "",
// //         description: "",
// //         imageUrl: "",
// //       });
// //     } catch (error) {
// //       console.error("Bike Upload Error:", error);
// //       toast.error("❌ Error listing bike.");
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-100 px-4 py-10 flex justify-center">
// //       <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8">
// //         <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">List Your Bike</h2>
// //         <form onSubmit={handleSubmit} className="space-y-5">
// //           <input
// //             type="text"
// //             name="name"
// //             placeholder="Bike Name"
// //             value={formData.name}
// //             onChange={handleChange}
// //             required
// //             className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
// //           />
// //           <input
// //             type="text"
// //             name="location"
// //             placeholder="Location"
// //             value={formData.location}
// //             onChange={handleChange}
// //             required
// //             className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
// //           />
// //           <input
// //             type="number"
// //             name="price"
// //             placeholder="Price per day (₹)"
// //             value={formData.price}
// //             onChange={handleChange}
// //             required
// //             className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
// //           />
// //           <textarea
// //             name="description"
// //             placeholder="Description"
// //             value={formData.description}
// //             onChange={handleChange}
// //             required
// //             rows="3"
// //             className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
// //           />
// //           <input
// //             type="text"
// //             name="imageUrl"
// //             placeholder="Image URL"
// //             value={formData.imageUrl}
// //             onChange={handleChange}
// //             className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
// //           />
// //           <button
// //             type="submit"
// //             className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
// //           >
// //             Submit
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ListBike;
// import React, { useState } from "react";
// import axios from "../api/axios";
// import { toast } from "react-toastify";

// const ListBike = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     location: "",
//     price: "",
//     description: "",
//     image: null,
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "image") {
//       setFormData({ ...formData, image: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const data = new FormData();
//       data.append("name", formData.name);
//       data.append("location", formData.location);
//       data.append("price", formData.price);
//       data.append("description", formData.description);
//       if (formData.image) {
//         data.append("image", formData.image);
//       }

//       await axios.post("/bikes/upload", data, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       toast.success("✅ Bike listed successfully!");
//       setFormData({
//         name: "",
//         location: "",
//         price: "",
//         description: "",
//         image: null,
//       });
//     } catch (err) {
//       console.error("Upload error:", err);
//       toast.error("❌ Error listing bike.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 px-4 py-10 flex justify-center">
//       <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8">
//         <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">List Your Bike</h2>
//         <form onSubmit={handleSubmit} className="space-y-5">
//           <input
//             type="text"
//             name="name"
//             placeholder="Bike Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
//           />
//           <input
//             type="text"
//             name="location"
//             placeholder="Location"
//             value={formData.location}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
//           />
//           <input
//             type="number"
//             name="price"
//             placeholder="Price per day (₹)"
//             value={formData.price}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
//           />
//           <textarea
//             name="description"
//             placeholder="Description"
//             value={formData.description}
//             onChange={handleChange}
//             required
//             rows="3"
//             className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
//           />
//           <input
//             type="file"
//             name="image"
//             accept="image/*"
//             onChange={handleChange}
//             className="w-full"
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ListBike;
import React, { useState } from "react";
import axios from "../api/axios";
import { toast } from "react-toastify";

const ListBike = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    price: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("location", formData.location);
      data.append("price", formData.price);
      data.append("description", formData.description);
      if (formData.image) {
        data.append("image", formData.image);
      }

      await axios.post("/bikes", {
        name: formData.name,
        location: formData.location,
        price: formData.price,
        description: formData.description,
        image: formData.image ? formData.image.name : ""
      });
      

      toast.success("✅ Bike listed successfully!");
      setFormData({
        name: "",
        location: "",
        price: "",
        description: "",
        image: null,
      });
    } catch (err) {
      console.error("Upload error:", err);
      toast.error("❌ Error listing bike.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 flex justify-center">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">List Your Bike</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Bike Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="number"
            name="price"
            placeholder="Price per day (₹)"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="3"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <label className="block">
            <span className="block text-sm font-medium text-gray-700 mb-1">Upload Image</span>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-blue-50 file:text-blue-700
                        hover:file:bg-blue-100
                        border rounded-md"
            />
          </label>

          {formData.image && (
            <div className="mt-4">
              <p className="text-sm text-gray-600">Preview:</p>
              <img
                src={URL.createObjectURL(formData.image)}
                alt="Bike Preview"
                className="mt-2 w-full max-w-xs rounded-lg shadow"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ListBike;
