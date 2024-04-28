import useAuth from "../Hooks/useAuth";
import Slider from "../Components/Slider";
import { useLoaderData } from "react-router-dom";
import CraftItemCard from "../Components/CraftItemCard";

const Home = () => {
  const { user } = useAuth();
  console.log(user);
  const craftItems = useLoaderData();
  console.log(craftItems);
  return (
    <div>
      <Slider></Slider>
      <div className="container mx-auto p-4">
        {/* section header  */}
        <div className="text-center">
        <h1 className="text-4xl font-extrabold mt-6">Add a new Item</h1>
        <p className="leading-7 opacity-80 mt-6 lg:w-2/3 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro ipsum
          numquam ex exercitationem, excepturi vel!
        </p>
      </div>
        {/* cards  */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {
                craftItems.map(item=><CraftItemCard key={item._id} item={item}></CraftItemCard>)
            }
          
        </div>
      </div>
    </div>
  );
};

export default Home;
