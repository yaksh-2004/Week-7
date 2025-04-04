


import { useState } from 'react';
import './App.css';

export default function App() {
  const [form, setForm] = useState({
    dropdown: '',
    multiSelect: [],
    number: '',
    toggle: false,
    slider: 'A',
    radioGroup: '',
    singleRadio: '',
    checkGroupAF: [],
    rating: 0,
    uploadImage: null,
    dragImages: []
  });

  const handleChange = (e) => {
    const { name, type, value, checked, files } = e.target;
    if (type === 'checkbox') {
      setForm((prev) => {
        const list = prev[name] || [];
        const updated = checked ? [...list, value] : list.filter((v) => v !== value);
        return { ...prev, [name]: updated };
      });
    } else if (type === 'file') {
      setForm((prev) => ({ ...prev, [name]: files[0] }));
    } else if (type === 'number') {
      setForm((prev) => ({ ...prev, [name]: Number(value) }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleToggle = (e) => {
    setForm((prev) => ({ ...prev, toggle: e.target.checked }));
  };

  const handleSlider = (e) => {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    setForm((prev) => ({ ...prev, slider: letters[parseInt(e.target.value)] }));
  };

  const handleRating = (val) => {
    setForm((prev) => ({ ...prev, rating: val }));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    setForm((prev) => ({ ...prev, dragImages: [...prev.dragImages, ...files] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (uploadedImage) data.append('uploadImage', uploadedImage);
         dragImages.forEach((img, i) => data.append(`dragImage${i}`, img));
      
          // Simulate form submission
          for (let pair of data.entries()) {
           console.log(pair[0], pair[1]);
          }
    console.log(form);
  };
  // const handleSubmit = (e) => {
  //       e.preventDefault();
  //       const data = new FormData();
  //       for (let key in formData) {
  //         if (Array.isArray(formData[key])) {
  //           formData[key].forEach((val) => data.append(key, val));
  //         } else {
  //           data.append(key, formData[key]);
  //         }
  //       }
  //       if (uploadedImage) data.append('uploadImage', uploadedImage);
  //       dragImages.forEach((img, i) => data.append(`dragImage${i}`, img));
    
  //       // Simulate form submission
  //       for (let pair of data.entries()) {
  //         console.log(pair[0], pair[1]);
  //       }
  //     };
    
  

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Select Cusine:</label>
          <select name="dropdown" onChange={handleChange} className="border rounded w-full">
            <option value="">Default</option>
            <option value="one">Thai</option>
            <option value="two">Mexican</option>
            <option value="three">Chinese</option>
            <option value="four">Italian</option>
            <option value="five">Anglo-Indian</option>
          </select>
        </div>

        <div>
          <label>Select Your Favourite Dishes:</label>
          <div className="flex gap-2">
            {["Chole Kulche","Paneer Tikka With Butter Roti","Dal-Bati","Manchurian-Noodles","Dosa"].map((opt) => (
              <label key={opt}>
                <input type="checkbox" name="multiSelect" value={opt} onChange={handleChange} /> {opt}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label>Total Person:</label>
          <input type="number" name="number" onChange={handleChange} className="border rounded w-full" />
        </div>

        <div className="flex items-center gap-2">
          <label>Reserved Table:</label>
          <input type="checkbox" onChange={handleToggle} checked={form.toggle} className="w-6 h-6" />
        </div>

        <div>
          <label>Slider (A to F): {form.slider}</label>
          <input type="range" min="0" max="5" step="1" onChange={handleSlider} className="w-full" />
          <div className="flex justify-between text-xs text-gray-600 mt-1">
            {["A", "B", "C", "D", "E", "F"].map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
        </div>

        <div>
          <label>Type:</label>
          <div className="flex gap-2">
            {["Breakfast", "Lunch", "Dinner"].map((grp) => (
              <label key={grp}>
                <input type="radio" name="radioGroup" value={grp} onChange={handleChange} /> {grp}
              </label>
            ))}
          </div>
        </div>

        {/* <div>
          <label>Radio Button:</label>
          <input type="radio" name="singleRadio" value="single" onChange={handleChange} /> Single
        </div> */}

        <div>
          <label>Checkbox Group A-F:</label>
          <div className="flex gap-2">
            {["A", "B", "C", "D", "E", "F"].map((val) => (
              <label key={val}>
                <input type="checkbox" name="checkGroupAF" value={val} onChange={handleChange} /> {val}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label>Rating:</label>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((val) => (
              <button
                key={val}
                type="button"
                onClick={() => handleRating(val)}
                className={`text-2xl ${val <= form.rating ? 'text-yellow-500' : 'text-gray-400'}`}
              >
                ★
              </button>
            ))}
          </div>
        </div>

        <div>
          <label>Upload Your Image at our Restaurant :</label>
          <input type="file" name="uploadImage" onChange={handleChange} />
        </div>

        <div
          className="border-dashed border-2 p-14 text-center"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          Drag & Drop Your Images Here
        </div>

        {form.dragImages.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {form.dragImages.map((file, idx) => (
              <div key={idx} className="border p-2 rounded text-sm bg-gray-100">
                {file.name}
              </div>
            ))}
          </div>
        )}

        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Submit Your Response
        </button>
      </form>
    </div>
  );
}







