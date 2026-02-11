import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import recipes from "../data.json";

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(()=>{
        const foundRecipe = recipes.find((r) => r.id === Number(id));
        setRecipe(foundRecipe);
    }, [id]);

    if(!recipe) return <p className="text-center mt-10">Loading recipe...</p>;

    return(
        <>
        <div className="max-w-4xl mx-auto mt-7 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-96 object-cover rounded-lg mb-6"
      />

      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>

      <h2 className="text-xl font-semibold mb-2">Ingredients</h2>

      <ul className="list-disc pl-5 mb-6">
        {recipe?.ingredients?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">Instructions</h2>

      <p className="leading-relaxed">{recipe.instructions}</p>
    </div>
        </>
    )
}
export default RecipeDetail;