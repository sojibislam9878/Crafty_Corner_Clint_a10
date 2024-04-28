
import PropTypes from "prop-types";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
const MyCardDetails = ({ item }) => {
  const { photo, item_name, rating, price, processing_time, customization, stock_status, _id } = item;

  const handleDelete=_id=>{
    console.log(_id);
    fetch(`http://localhost:3000/craftitems/${_id}`, {
      method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      location.reload()
    })
  }

  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl h-full">
        <figure>
          <img
            className="transition duration-300 hover:scale-105"
            src={photo}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-4xl font-bold mt-4 font-garamond bg-gradient-to-r from-[#4facfe] to-blue-500 bg-clip-text text-transparent">
            {item_name}
          </h2>
          
          <div className="flex">
            <p className="text-lg font-medium opacity-70">$ {price}</p>
            <p className="text-lg font-medium opacity-70 flex items-center gap-2">
              {rating} <FaRegStar />
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
          <p className="text-lg opacity-70 font-medium">customization : {customization}</p>
          <p className="text-lg opacity-70 font-medium">Stuck Status : {stock_status}</p>
          </div>
          
          <p className="text-lg font-medium opacity-70 flex items-center gap-2">
            Proccessing Time: {processing_time}
          </p>
          <div className=" flex gap-3">
            <Link to= {`/update/${_id}`}>
            <button className="flex justify-center items-center btn bg-blue-500 text-white hover:bg-blue-700 mt-6">
            <MdOutlineEdit className="text-xl" /> Update Items
            </button>
            </Link>
            <button onClick={()=>handleDelete(_id)} className="btn bg-red-500 text-white hover:bg-red-700 mt-6">
            <RiDeleteBin2Fill className="text-xl" /> Delete 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
MyCardDetails.propTypes = {
    item: PropTypes.object,
  };
export default MyCardDetails;
