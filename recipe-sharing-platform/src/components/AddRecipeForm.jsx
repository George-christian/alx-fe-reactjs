import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim() || ingredients.split("\n").length < 2)
      newErrors.ingredients = "Please enter at least two ingredients";
    if (!instructions.trim() || instructions.split("\n").length < 2)
      newErrors.instructions = "Please enter at least two steps";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log({
        title,
        ingredients: ingredients.split("\n"),
        instructions: instructions.split("\n"),
      });

      setTitle("");
      setIngredients("");
      setInstructions("");
      alert("Recipe submitted successfully!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-lg p-6 rounded-lg shadow"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Add New Recipe
        </h2>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Recipe Title</label>
          <input
            type="text"
            className={`w-full p-2 border rounded ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Ingredients (one per line)</label>
          <textarea
            className={`w-full p-2 border rounded h-24 ${
              errors.ingredients ? "border-red-500" : "border-gray-300"
            }`}
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm">{errors.ingredients}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Preparation Steps (one per line)</label>
          <textarea
            className={`w-full p-2 border rounded h-24 ${
              errors.instructions ? "border-red-500" : "border-gray-300"
            }`}
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          ></textarea>
          {errors.instructions && (
            <p className="text-red-500 text-sm">{errors.instructions}</p>
          )}
        </div>

        
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
