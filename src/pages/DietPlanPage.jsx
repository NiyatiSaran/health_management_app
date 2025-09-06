import { useState } from "react";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import Footer from "../components/common/Footer";
import "../style/DietPlan.css"; 

export default function DietPlan() {
  const [form, setForm] = useState({ name: "", age: "", bmi: "", goal: "" });
  const [dietPlan, setDietPlan] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy diet plan (replace with API/logic later)
    setDietPlan({
      goal: form.goal,
      meals: [
        { time: "Breakfast", food: "Oats with fruits + green tea" },
        { time: "Lunch", food: "Grilled chicken/fish + veggies" },
        { time: "Snack", food: "Nuts + smoothie" },
        { time: "Dinner", food: "Salad + lentil soup" },
      ],
    });
  };

  return (
    <div className="diet-container">
      <Sidebar />

      <div className="diet-main">
        <Navbar />

        <main className="diet-content">
          <h1 className="text-2xl font-bold text-blue-700 mb-6">
            Personalized Diet Plan
          </h1>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="diet-form">
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label htmlFor="age">Age</label>
              <input
                id="age"
                type="number"
                name="age"
                value={form.age}
                onChange={handleChange}
                placeholder="Enter your age"
                required
              />
            </div>

            <div>
              <label htmlFor="bmi">BMI</label>
              <input
                id="bmi"
                type="number"
                name="bmi"
                value={form.bmi}
                onChange={handleChange}
                placeholder="Enter your BMI"
                required
              />
            </div>

            <div>
              <label htmlFor="goal">Goal</label>
              <select
                id="goal"
                name="goal"
                value={form.goal}
                onChange={handleChange}
                required
              >
                <option value="">Select goal</option>
                <option value="Weight Loss">Weight Loss</option>
                <option value="Weight Gain">Weight Gain</option>
                <option value="Maintain">Maintain</option>
              </select>
            </div>

            <button type="submit" className="diet-button">
              Generate Diet Plan
            </button>
          </form>

          {/* Diet Plan Output */}
          {dietPlan && (
            <div className="diet-output">
              <h2>Suggested Diet Plan ({dietPlan.goal})</h2>
              <ul>
                {dietPlan.meals.map((meal, idx) => (
                  <li key={idx}>
                    <span>{meal.time}</span>
                    <span>{meal.food}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </main>

        <Footer />
      </div>
    </div>
  );
}
