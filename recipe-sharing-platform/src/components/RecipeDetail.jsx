import { useParams } from 'react-router-dom'
import recipes from '../data.json'

const RecipeDetail = () => {
  const { id } = useParams()

  const recipe = recipes.find(r => r.id === Number(id))

  if (!recipe) return <p>Recipe not found</p>

  return (
    <>
      <div className='max-w-4xl mx-auto p-6'>
        <img
          src={recipe.image}
          alt={recipe.title}
          className='w-full h-64 object-cover rounded-lg mb-6'
        />

        <h1 className='text-3xl font-bold mb-4'>{recipe.title}</h1>

        <h2 className='text-xl font-semibold mb-2'>Ingredients</h2>

        <ul className='list-disc pl-5 mb-6'>
          {recipe?.ingredients?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2 className='text-xl font-semibold mb-2'>Instructions</h2>

        <p className='leading-relaxed'>{recipe.instructions}</p>
      </div>
    </>
  )
}
export default RecipeDetail;
