import { useState } from "react";
import MovieOption from "./MovieOption";
import SummaryScreen from "./SummaryScreen";

const movies = [
  { title: "Avatar", year: "2009", director: "James Cameron" },
  { title: "Inception", year: "2010", director: "Christopher Nolan" },
  { title: "Interstellar", year: "2014", director: "Christopher Nolan" },
  { title: "The Shawshank Redemption", year: "1994", director: "Frank Darabont" },
  { title: "Pulp Fiction", year: "1994", director: "Quentin Tarantino" },
  { title: "Parasite", year: "2019", director: "Bong Joon-ho" }
];

export default function MovieSurvey() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    movie: "",
    comments: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "โปรดใส่ชื่อของคุณ";
    if (!formData.email) newErrors.email = "โปรดใส่ Email ของคุณ";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "รูปแบบอีเมลไม่ถูกต้อง";
    }
    if (!formData.movie) newErrors.movie = "กรุณาเลือกหนังที่คุณชอบ";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", movie: "", comments: "" });
    setErrors({});
    setSubmitted(false);
  };

  if (submitted) {
    return <SummaryScreen formData={formData} onReset={handleReset} />;
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-purple-600 mb-4 justify-center item-center flex">🎬 Movie Survey</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="block font-medium mb-2">ชื่อ-สกุล</label>
          <input
            type="text"
            name="name"
            placeholder="กรุณาใส่ชื่อ"
            value={formData.name}
            onChange={handleChange}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2">E-mail</label>
          <input
            type="email"
            name="email"
            placeholder="กรุณากรอกอีเมล"
            value={formData.email}
            onChange={handleChange}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div className="mb-4">
  <label className="block font-medium">เลือกหนังที่คุณชอบ</label>
  <div className="space-y-2">
    {movies.map((movie) => (
      <div key={movie.title} className=" p-3 rounded-md hover:shadow-xl flex items-center">
        <MovieOption
          movie={movie}
          selected={formData.movie}
          onChange={handleChange}
        />
      </div>
    ))}
  </div>
  {errors.movie && <p className="text-red-500 text-sm">{errors.movie}</p>}
</div>


        <div className="mb-4">
          <label className="block font-medium">ความคิดเห็น</label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="flex justify-between">
        <button type="button" onClick={handleReset} className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400">
            รีเซ็ต
          </button>
          <button type="submit" className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            ส่งแบบสำรวจ
          </button>
          
        </div>
      </form>
    </div>
  );
}
