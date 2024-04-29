import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import Spinner from "../Components/Spinner";

const CardDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [card, setCard] = useState({});
  const [sppinng, setSpinng] =useState(true)

  useEffect(() => {
    fetch(`http://localhost:3000/singleCard/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCard(data);
        setSpinng(false)
      });
  }, [id]);
  const {
    item_name,
    short_description,
    price,
    rating,
    customization,
    photo,
    processing_time,
    stock_status,
  } = card;
  if (sppinng) {
    return <Spinner></Spinner>
  }


  return (
    <div className="lg:flex gap-4 mt-12 container mx-auto p-4 shadow-lg rounded-xl bg-base-200 mb-28">
      <div className=" lg:w-1/3 flex justify-center items-center">
        <img
          className="h-full w-full object-cover rounded-xl"
          src={photo}
          alt=""
        />
      </div>
      <div className=" lg:w-2/3 mt-6 lg:mt-0">
        <h1 className="text-4xl font-bold playfair">{item_name}</h1>
        <p className="text-xl font-medium opacity-80 mt-4">
          {short_description}
        </p>
        <div className="">
          <h6 className="border-t-2 text-xl font-medium opacity-80 py-4 mt-6">
            {rating >= 0 && rating <= 0.4 ? (
              <div className="flex text-orange-500 items-center mt-3">
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <p className=" ml-3">{rating}</p>
              </div>
            ) : rating >= 0.5 && rating <= 0.9 ? (
              <div className="flex text-orange-500 items-center mt-3">
                <FaStarHalfAlt />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <p className=" ml-3">{rating}</p>
              </div>
            ) : rating >= 1 && rating <= 1.4 ? (
              <div className="flex text-orange-500 items-center mt-3">
                <FaStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <p className=" ml-3">{rating}</p>
              </div>
            ) : rating >= 1.5 && rating <= 1.9 ? (
              <div className="flex text-orange-500 items-center mt-3">
                <FaStar />
                <FaStarHalfAlt />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <p className=" ml-3">{rating}</p>
              </div>
            ) : rating >= 2 && rating <= 2.4 ? (
              <div className="flex text-orange-500 items-center mt-3">
                <FaStar />
                <FaStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <p className=" ml-3">{rating}</p>
              </div>
            ) : rating >= 2.5 && rating <= 2.9 ? (
              <div className="flex text-orange-500 items-center mt-3">
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
                <FaRegStar />
                <FaRegStar />
                <p className=" ml-3">{rating}</p>
              </div>
            ) : rating >= 3 && rating <= 3.4 ? (
              <div className="flex text-orange-500 items-center mt-3">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
                <FaRegStar />
                <p className=" ml-3">{rating}</p>
              </div>
            ) : rating >= 3.4 && rating <= 3.9 ? (
              <div className="flex text-orange-500 items-center mt-3">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
                <FaRegStar />
                <p className=" ml-3">{rating}</p>
              </div>
            ) : rating >= 4 && rating <= 4.4 ? (
              <div className="flex text-orange-500 items-center mt-3">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
                <p className=" ml-3">{rating}</p>
              </div>
            ) : rating >= 4.5 && rating <= 4.9 ? (
              <div className="flex text-orange-500 items-center mt-3">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
                <p className=" ml-3">{rating}</p>
              </div>
            ) : (
              <div className="flex text-orange-500 items-center mt-3">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <p className=" ml-3">{rating}</p>
              </div>
            )}
          </h6>
          <h6 className="border-b-2 text-xl font-medium opacity-80 pb-4">
            ${price}
          </h6>
        </div>
        <div className=" pb-5 mt-7">
          <button className="bg-[#34373F] hover:bg-[#B18B5E] transition-all duration-300 p-5 w-full rounded-lg text-white font-medium flex justify-center items-center gap-3">
            <span className="material-symbols-outlined">shopping_cart</span>
            <span>Add Cart</span>
          </button>
          <button className="bg-[#B18B5E] hover:bg-[#34373F] transition-all duration-300 p-5 mt-3 w-full rounded-lg text-white font-medium flex justify-center items-center gap-3">
            <span className="material-symbols-outlined">shopping_bag</span>
            <span>Buy Now</span>
          </button>
        </div>
        <div className="mt-6">
          <table className="w-full lg:w-2/3">
            <tr className="">
              <td className="w-2/3 opacity-70">customisable?</td>
              <td className="font-medium">{customization}</td>
            </tr>
            <tr className="">
              <td className="w-2/3 opacity-70">Processing Time:</td>
              <td className="font-medium">{processing_time}</td>
            </tr>
            <tr className="">
              <td className="w-2/3 opacity-70">Stock Status:</td>
              <td className="font-medium">{stock_status}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
