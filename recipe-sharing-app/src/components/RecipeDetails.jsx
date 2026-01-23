import { useRecipeStore } from './recipeStore';

  const RecipeDetails = ({ recipeId }) => {
    const recipe = useRecipeStore(state =>
      state.recipes.find(recipe => recipe.id === recipeId)
    );

    return (
      <div>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>


  
        <button onClick={() => useRecipeStore.getState().deleteRecipe}>Delete</button>
        {/* Render EditRecipeForm and DeleteRecipeButton here */}
      </div>
    );
  };
  export default RecipeDetails;