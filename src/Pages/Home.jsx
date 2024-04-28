import useAuth from "../Hooks/useAuth";
import Slider from "../Components/Slider";
import { useLoaderData } from "react-router-dom";
import CraftItemCard from "../Components/CraftItemCard";
import CategoryItems from "../Components/CategoryItems";

const Home = () => {
  const { user } = useAuth();
  console.log(user);
  const allCraftItems = useLoaderData();
  const craftItems = allCraftItems.slice(0,6)
  console.log(craftItems);
  return (
    <div>
      <Slider></Slider>
      <div className="container mx-auto p-4 mt-28">
        {/* section header  */}
        <div className="text-center">
        <h1 className="text-4xl font-extrabold mt-6">Craft Item section</h1>
        <p className="leading-7 opacity-80 mt-6 lg:w-2/3 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro ipsum
          numquam ex exercitationem, excepturi vel!
        </p>
      </div>
        {/* cards  */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
          {
                craftItems.map(item=><CraftItemCard key={item._id} item={item}></CraftItemCard>)
            }
          
        </div>
      </div>
      <CategoryItems></CategoryItems>
    </div>
  );
};

export default Home;
