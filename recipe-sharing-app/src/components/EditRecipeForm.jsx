import useRecipeStore from "./recipeStore";
import { useState } from "react";

const EditRecipeForm = ({ recipe}) =>{
   const updateRecipe = useRecipeStore((state)=> state.editRecipe);
   const [title, setTitle] = useState(recipe.title);
   const [description, setDescription] = useState(recipe.description);

   const handleSubmit = (e) => {
    e.preventDefault();

    updateRecipe({ ...recipe, title, description});
   }

    return(
        <div>
           
            <form onSubmit = {handleSubmit}>

          <h2>Update Recipe</h2>

           <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        paceholder="Title"
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />

      <button type="submit">Update</button>
            </form>
        </div>
    )
}
export default EditRecipeForm;