
// import { useState } from 'react';
// import './App.css';

// export default function App() {
//   const [formData, setFormData] = useState({ rating: 0 });
//   const [dragImages, setDragImages] = useState([]);
//   const [uploadedImage, setUploadedImage] = useState(null);

//   const handleChange = (e) => {
//     const { name, type, value, checked, files } = e.target;
//     if (type === 'checkbox') {
//       setFormData((prev) => ({
//         ...prev,
//         [name]: prev[name] ? [...prev[name], value] : [value],
//       }));
//     } else if (type === 'file') {
//       setUploadedImage(files[0]);
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: type === 'number' ? Number(value) : value }));
//     }
//   };

//   const handleToggle = (e) => {
//     setFormData((prev) => ({ ...prev, toggle: e.target.checked }));
//   };

//   const handleSlider = (e) => {
//     const map = ['A', 'B', 'C', 'D', 'E', 'F'];
//     setFormData((prev) => ({ ...prev, slider: map[parseInt(e.target.value)] }));
//   };

//   const handleDragDrop = (e) => {
//     e.preventDefault();
//     const files = Array.from(e.dataTransfer.files);
//     setDragImages((prev) => [...prev, ...files]);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const data = new FormData();
//     for (let key in formData) {
//       if (Array.isArray(formData[key])) {
//         formData[key].forEach((val) => data.append(key, val));
//       } else {
//         data.append(key, formData[key]);
//       }
//     }
//     if (uploadedImage) data.append('uploadImage', uploadedImage);
//     dragImages.forEach((img, i) => data.append(`dragImage${i}`, img));

//     // Simulate form submission
//     for (let pair of data.entries()) {
//       console.log(pair[0], pair[1]);
//     }
//   };

//   return (
//     <div className="p-6 max-w-3xl mx-auto space-y-6">
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Select Dropdown */}
//         <div>
//           <label>Select Option:</label>
//           <select name="dropdown" onChange={handleChange} className="border rounded w-full">
//             <option value="">Choose</option>
//             <option value="one">One</option>
//             <option value="two">Two</option>
//           </select>
//         </div>

//         {/* Multiple Checkbox */}
//         <div>
//           <label>Multiple Select:</label>
//           <div className="flex gap-2">
//             {['Option 1', 'Option 2', 'Option 3'].map((opt, idx) => (
//               <label key={idx}>
//                 <input type="checkbox" name="multiSelect" value={opt} onChange={handleChange} /> {opt}
//               </label>
//             ))}
//           </div>
//         </div>

//         {/* Input Number */}
//         <div>
//           <label>Number:</label>
//           <input type="number" name="number" onChange={handleChange} className="border rounded w-full" />
//         </div>

//         {/* Switch Toggler */}
//         <div className="flex items-center gap-2">
//           <label>Toggle:</label>
//           <input type="checkbox" onChange={handleToggle} className="toggle toggle-accent" />
//         </div>

//         {/* Slider A to F */}
//         <div>
//           <label>Slider A-F:</label>
//           <input type="range" min="0" max="5" onChange={handleSlider} className="w-full" />
//         </div>

//         {/* Radio Group Button */}
//         <div>
//           <label>Radio Group:</label>
//           <div className="flex gap-2">
//             {[1, 2, 3].map((val) => (
//               <label key={val}>
//                 <input type="radio" name="radioGroup" value={`Group${val}`} onChange={handleChange} /> Group{val}
//               </label>
//             ))}
//           </div>
//         </div>

//         {/* Single Radio Button */}
//         <div>
//           <label>Radio Button:</label>
//           <input type="radio" name="singleRadio" value="single" onChange={handleChange} /> Single
//         </div>

//         {/* Checkbox Group A to F */}
//         <div>
//           <label>Checkbox Group A-F:</label>
//           <div className="flex gap-2">
//             {['A', 'B', 'C', 'D', 'E', 'F'].map((val) => (
//               <label key={val}>
//                 <input type="checkbox" name="checkGroupAF" value={val} onChange={handleChange} /> {val}
//               </label>
//             ))}
//           </div>
//         </div>

//         {/* Rating */}
//         <div>
//           <label>Rating:</label>
//           <div className="flex gap-1">
//             {[1, 2, 3, 4, 5].map((val) => (
//               <button
//                 key={val}
//                 type="button"
//                 className={`text-2xl ${val <= formData.rating ? 'text-yellow-500' : 'text-gray-400'}`}
//                 onClick={() => setFormData((prev) => ({ ...prev, rating: val }))}
//               >
//                 ★
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Upload Image */}
//         <div>
//           <label>Upload Image:</label>
//           <input type="file" name="uploadImage"  onChange={handleChange} />
//         </div>

//         {/* Drag and Drop Images */}
//         <div
//           className="border border-dashed p-4 text-center h-44"
//           onDragOver={(e) => e.preventDefault()}
//           onDrop={handleDragDrop}
//         >
//           Drag & Drop Images Here
//         </div>

//         {dragImages.length > 0 && (
//           <div className="flex flex-wrap gap-2">
//             {dragImages.map((file, idx) => (
//               <div key={idx} className="border p-2 rounded">
//                 {file.name}
//               </div>
//             ))}
//           </div>
//         )}

//         <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }


