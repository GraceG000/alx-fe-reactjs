import { useState, useEffect } from 'react'
import RecipeCard from './RecipeCard';

const HomePage = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('/data.json')
        const result = await response.json()
        setData(result)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally{
        setLoading(false);
      }
    }
    fetchRecipes()
  }, [])

  if (loading) return <p>Loading...</p>

  if (data.length === 0) return <p>No recipes available</p>

  return (
    <>
    <div className='text-center mb-4 mt-4'><h1 className="font-bold text-5xl">Recipes</h1></div>
      <div className='py-4 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
        {data &&
          data.map(datum => (
            <div key={datum.id}>
              <RecipeCard
                id={datum.id}
                title={datum.title}
                image={datum.image}
                summary={datum.summary}
              />
            </div>
          ))}
      </div>
    </>
  )
}
export default HomePage
