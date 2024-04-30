import useAuth from "../Hooks/useAuth";
import Slider from "../Components/Slider";
import { useLoaderData } from "react-router-dom";
import CraftItemCard from "../Components/CraftItemCard";
import CategoryItems from "../Components/CategoryItems";
import FAQSection from "../Components/FAQSection";
import Contact from "../Components/Contact";

const Home = () => {
  const { user } = useAuth();
  console.log(user);
  const allCraftItems = useLoaderData();
  const craftItems = allCraftItems.slice(0,6)
  console.log(craftItems);
  return (
    <div>
      <Slider></Slider>
      <div className="container mx-auto p-4 md:mt-32 ">
        {/* section header  */}
        <div className="text-center">
        <h1 className="text-4xl font-extrabold mt-6 font-garamond">Craft Item</h1>
        <p className="leading-7 opacity-80 mt-6 lg:w-2/3 mx-auto">
        Explore our exquisite collection of handcrafted items, where artistry meets imagination. From intricate pottery to meticulously woven textiles, each piece tells a story of skilled craftsmanship and passion
        </p>
      </div>
        {/* cards  */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:mt-16 mt-6">
          {
                craftItems.map(item=><CraftItemCard key={item._id} item={item}></CraftItemCard>)
            }
          
        </div>
      </div>
      <CategoryItems></CategoryItems>
      <FAQSection></FAQSection>
      <Contact></Contact>
    </div>
  );
};

export default Home;
