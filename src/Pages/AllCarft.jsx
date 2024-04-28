import { useLoaderData } from "react-router-dom";
import CraftItemCard from "../Components/CraftItemCard";



const AllCarft = () => {
  const allData = useLoaderData()
    
    return (
        <div className="container mx-auto p-4 mb-28">
            <h1 className="text-4xl mt-6 font-extrabold">All Art & Carft here :</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
            {
             allData.map(item=><CraftItemCard key={item._id} item={item}></CraftItemCard>)
            }
            </div>
        </div>
    );
};

export default AllCarft;