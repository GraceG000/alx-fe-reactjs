import { Link } from "react-router-dom";
import recipe from "../data.json"


const RecipeCard = ({id, title, summary, image}) => {
 return(
    <>
    <div className="grid grid-rows-[2rem_25rem_5rem] gap-2 border border-black shadow-lg rounded-3xl hover:shadow-indigo-400 inset-shadow-3xl w-full">
        {/*Card Title/Heading...*/}
        <div className="rounded-tr-2xl">
           <h2 className="font-bold text-lg px-2 py-2">{title}</h2> 
        </div>
        {/*Card image*/}
        <div>
            <img src={image} alt={title} className="w-full h-full" />
        </div>
        {/*Card Summary...*/}
        <div className="flex px-4 items-center justify-center rounded-br-xl rounded-bl-xl">
            <div><p><em>{summary}</em></p></div>
        </div>
      </div>
    </>
 )
}
export default RecipeCard;
