import { Link } from "react-router-dom";

const CategoryItems = () => {
  return (
    <div className="bg-base-200">
      <div className="container mx-auto p-4">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold mt-6 font-garamond">Category Item section</h1>
        <p className="leading-7 opacity-80 mt-6 lg:w-2/3 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro ipsum
          numquam ex exercitationem, excepturi vel!
        </p>
      </div>
      <div className="flex gap-6">
       <Link to="/allcategory"> <div className=" min-h-16 min-w-10 border-2 border-red-300"></div></Link>
       <Link><div className=" min-h-16 min-w-10 border-2 border-red-300"></div></Link>
       <Link><div className=" min-h-16 min-w-10 border-2 border-red-300"></div></Link>
       <Link><div className=" min-h-16 min-w-10 border-2 border-red-300"></div></Link>
       <Link><div className=" min-h-16 min-w-10 border-2 border-red-300"></div></Link>
       <Link><div className=" min-h-16 min-w-10 border-2 border-red-300"></div></Link>
       
      </div>
      </div>
    </div>
  );
};

export default CategoryItems;
