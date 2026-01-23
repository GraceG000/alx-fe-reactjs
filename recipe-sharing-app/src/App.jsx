import { Routes, Route } from 'react-router-dom';
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from './components/RecipeDetails';

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<>
       <RecipeList />
      <AddRecipeForm />
      
      </>}/>

      <Route path="/recipes/:id" element={<RecipeDetails />} />
    
    </Routes>
     
    </>
  );
};

export default App;
