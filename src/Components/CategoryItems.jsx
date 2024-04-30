import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
const CategoryItems = () => {
  const { setSubCategory } = useAuth();

  const whichCliked = (e) => {
    const value = e.target.innerText;
    console.log(value);
    //     setSubCategory(value)
    setSubCategory(value);
  };

  return (
    <div className="bg-base-300 md:mt-32 mt-16 md:py-8">
      <div className="container mx-auto p-4">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold mt-6 font-garamond">
            Art & Craft Categories
          </h1>
          <p className="leading-7 opacity-80 mt-6 lg:w-2/3 mx-auto">
            Discover boundless creativity in our diverse array of Art & Craft
            categories. Unleash your imagination as you explore our curated
            selection of painting supplies, sculpting materials, DIY kits, and
            more
          </p>
        </div>
        {/* category cards continer */}
        <div className="flex flex-wrap justify-center md:gap-12 gap-6 text-center mx-auto md:mt-16 mt-8">
          {/* cards */}

          <div
            onClick={whichCliked}
            className="bg-base-200 px-12 py-4 rounded-xl flex justify-center group h-96 w-80"
          >
            <div className="relative">
              <div className="h-52 w-52 border-2 border-dashed group-hover:animate-spin mr-10  border-blue-500 absolute rounded-full"></div>
              <div className="h-52 w-52 rounded-full border overflow-hidden">
                <img
                  src="clay.jpeg"
                  alt=""
                  className="group-hover:scale-110 transition-all duration-1000"
                />
              </div>
              <p className="text-lg opacity-80 mt-3">
                Click Here for more items same gategory
              </p>
              <Link to="/allcategory">
                <button className="mt-4 text-xl py-2 px-3 rounded-xl bg-slate-200">
                  Clay_sculpture
                </button>
              </Link>
            </div>
          </div>

          <div
            onClick={whichCliked}
            className="bg-base-200 px-12 py-4 rounded-xl flex justify-center group h-96 w-80"
          >
            <div className="relative">
              <div className="h-52 w-52 border-2 border-dashed group-hover:animate-spin mr-10  border-blue-500 absolute rounded-full"></div>
              <div className="h-52 w-52 rounded-full border overflow-hidden">
                <img
                  src="stone.jpeg"
                  alt=""
                  className="group-hover:scale-110 transition-all duration-1000"
                />
              </div>
              <p className="text-lg opacity-80 mt-3">
                Click Here for more items same gategory
              </p>
              <Link to="/allcategory">
                <button className="mt-4 text-xl py-2 px-3 rounded-xl bg-slate-200">
                  Stone_sculpture
                </button>
              </Link>
            </div>
          </div>

          <div
            onClick={whichCliked}
            className="bg-base-200 px-12 py-4 rounded-xl flex justify-center group h-96 w-80"
          >
            <div className="relative">
              <div className="h-52 w-52 border-2 border-dashed group-hover:animate-spin mr-10  border-blue-500 absolute rounded-full"></div>
              <div className="h-52 w-52 rounded-full border overflow-hidden">
                <img
                  src="metal.jpeg"
                  alt=""
                  className="group-hover:scale-110 transition-all duration-1000"
                />
              </div>
              <p className="text-lg opacity-80 mt-3">
                Click Here for more items same gategory
              </p>
              <Link to="/allcategory">
                <button className="mt-4 text-xl py-2 px-3 rounded-xl bg-slate-200">
                  Metal_sculpture
                </button>
              </Link>
            </div>
          </div>

          <div
            onClick={whichCliked}
            className="bg-base-200 px-12 py-4 rounded-xl flex justify-center group h-96 w-80"
          >
            <div className="relative">
              <div className="h-52 w-52 border-2 border-dashed group-hover:animate-spin mr-10  border-blue-500 absolute rounded-full"></div>
              <div className="h-52 w-52 rounded-full border overflow-hidden">
                <img
                  src="wood.jpeg"
                  alt=""
                  className="group-hover:scale-110 transition-all duration-1000"
                />
              </div>
              <p className="text-lg opacity-80 mt-3">
                Click Here for more items same gategory
              </p>
              <Link to="/allcategory">
                <button className="mt-4 text-xl py-2 px-3 rounded-xl bg-slate-200">
                  Wood_carving
                </button>
              </Link>
            </div>
          </div>

          <div
            onClick={whichCliked}
            className="bg-base-200 px-12 py-4 rounded-xl flex justify-center group h-96 w-80"
          >
            <div className="relative">
              <div className="h-52 w-52 ml-12 border-2 border-dashed group-hover:animate-spin mr-10  border-blue-500 absolute rounded-full"></div>
              <div className="h-52 w-52 ml-12 rounded-full border overflow-hidden">
                <img
                  src="nature.jpeg"
                  alt=""
                  className="group-hover:scale-110 transition-all duration-1000"
                />
              </div>
              <p className="text-lg opacity-80 mt-3 ">
                Click Here for more items same gategory
              </p>
              <Link to="/allcategory">
                <button className="mt-4 text-xl py-2 px-3 rounded-xl bg-slate-200">
                  Natural_material_sculpture
                </button>
              </Link>
            </div>
          </div>

          <div
            onClick={whichCliked}
            className="bg-base-200 px-12 py-4 rounded-xl flex justify-center group h-96 w-80"
          >
            <div className="relative">
              <div className="h-52 w-52 border-2 border-dashed group-hover:animate-spin mr-10  border-blue-500 absolute rounded-full"></div>
              <div className="h-52 w-52 rounded-full border overflow-hidden">
                <img
                  src="beaded.jpeg"
                  alt=""
                  className="group-hover:scale-110 transition-all duration-1000"
                />
              </div>
              <p className="text-lg opacity-80 mt-3">
                Click Here for more items same gategory
              </p>
              <Link to="/allcategory">
                <button className="mt-4 text-xl py-2 px-3 rounded-xl bg-slate-200">
                  Beaded_sculpture
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryItems;
