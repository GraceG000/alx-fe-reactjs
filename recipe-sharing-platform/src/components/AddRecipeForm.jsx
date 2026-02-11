import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!title || !ingredients || !steps) {
      setError("All fields are required");
      return;
    }

    const ingredientList = ingredients.split(",");

    if (ingredientList.length < 2) {
      setError("Please enter at least two ingredients separated by commas.");
      return;
    }

    setError("");

    const newRecipe = {
      title,
      ingredients: ingredientList,
      steps,
    };

    console.log(newRecipe);

    // Reset form
    setTitle("");
    setIngredients("");
    setInstructions("");
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Add New Recipe
      </h2>

      {error && (
        <p className="text-red-500 mb-4 text-center">{error}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Title */}
        <input
          type="text"
          placeholder="Recipe Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring"
        />

        {/* Ingredients */}
        <textarea
          placeholder="Ingredients (comma separated)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full border rounded-lg p-3 h-24 resize-none focus:outline-none focus:ring"
        />

        {/* Seps */}
        <textarea
          placeholder="Preparation Steps"
          value={steps}
          onChange={(e) => setInstructions(e.target.value)}
          className="w-full border rounded-lg p-3 h-32 resize-none focus:outline-none focus:ring"
        />

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
