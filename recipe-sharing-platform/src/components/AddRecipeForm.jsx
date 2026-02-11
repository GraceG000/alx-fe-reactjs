import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  const [errors, setErrors] = useState({}); // <-- structured errors

  const validate = () => {
    const newErrors = {};

    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required";
    if (!steps.trim()) newErrors.steps = "Steps are required";

    const ingredientList = ingredients.split(",").map(i => i.trim());
    if (ingredientList.length < 2) newErrors.ingredients = "Please enter at least two ingredients";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return; // stop submission if validation fails

    const newRecipe = {
      title,
      ingredients: ingredients.split(",").map(i => i.trim()),
      steps,
    };

    console.log(newRecipe);

    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Recipe</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Title */}
        <div>
          <input
            type="text"
            placeholder="Recipe Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring"
          />
          {errors.title && <p className="text-red-500 mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <textarea
            placeholder="Ingredients (comma separated)"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border rounded-lg p-3 h-24 resize-none focus:outline-none focus:ring"
          />
          {errors.ingredients && <p className="text-red-500 mt-1">{errors.ingredients}</p>}
        </div>

        {/* Steps */}
        <div>
          <textarea
            placeholder="Preparation Steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full border rounded-lg p-3 h-32 resize-none focus:outline-none focus:ring"
          />
          {errors.steps && <p className="text-red-500 mt-1">{errors.steps}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Submit Recipe
        </button>

      </form>
    </div>
  );
};

export default AddRecipeForm;
