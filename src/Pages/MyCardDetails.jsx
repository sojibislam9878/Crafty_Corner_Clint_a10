
import PropTypes from "prop-types";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const MyCardDetails = ({ item , reRender, setReRender }) => {
  const { photo, item_name, rating, price, customization, stock_status, _id } = item;

  const handleDelete=_id=>{
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/craftitems/${_id}`, {
      method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if (data.deletedCount) {
        Swal.fire({
          title: "Deleted!",
          text: "Items has been deleted.",
          icon: "success"
        });
        // location.reload()
        setReRender(!reRender)
      }
    })
      }
    });
    
  }

  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl h-full">
        <figure>
          <img
            className="w-full lg:h-[484px] md:h-[735px] h-[285px] object-cover  transition duration-300 hover:scale-105"
            src={photo}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-4xl font-bold mt-4 font-garamond bg-gradient-to-r from-[#B18B5E] to-[#d6aa76] bg-clip-text text-transparent">
            {item_name}
          </h2>
          
          <div className="flex">
            <p className="text-lg font-medium opacity-70">{price} $</p>
            <p className="text-lg font-medium opacity-70 flex items-center gap-2">
              {rating} <FaRegStar />
            </p>
          </div>
          <div className="">
          <p className="text-lg opacity-70"><span className=" font-medium">customization :</span> <span className="opacity-60">{customization}</span></p>
          <p className="text-lg opacity-70 "><span className="font-medium">Stuck Status :</span> <span className="opacity-60">{stock_status}</span></p>
          </div>
          <div className=" flex gap-3">
            <Link to= {`/update/${_id}`}>
            <button className="flex justify-center items-center btn bg-blue-500 text-white hover:bg-blue-700 mt-6">
            <MdOutlineEdit className="text-xl" /> Update
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
    reRender: PropTypes.bool,
    setReRender: PropTypes.func,
  };
export default MyCardDetails;
