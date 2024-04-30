import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css'

const SubCard = ({item}) => {
    const { item_name, photo, _id, price } = item;
    const oldPrice = parseFloat(price)+100
    return (
        <div>
      <div className="card card-compact bg-base-200 shadow-xl h-full overflow-hidden group ">
        <div className=" ">
          <figure className="relativ overflow-hidden">
            <img src={photo} alt="Shoes" className="w-full lg:h-[484px] md:h-[735px] h-[285px] object-cover" />
            <div className="absolute h-1/5 w-full flex items-center justify-center bottom-10 group-hover:bottom-16 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <Link to= {`/subDetails/${_id}`}><button className="btn bg-[#B18B5E] border-none text-white hover:bg-[#34373F]">View Details</button></Link>
            </div>
            <div className="absolute h-full w-1/5 lg:w-1/5 bg-black bg-opacity-0 flex  flex-col gap-5 items-center justify-center -right-10 group-hover:right-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <button data-tooltip-id="my-tooltip" data-tooltip-content="Add to Favorite" className="bg-base-100 p-3 rounded-full flex justify-center items-center hover:bg-[#B18B5E] hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined">favorite</span>
              </button>
              <button data-tooltip-id="my-tooltip" data-tooltip-content="Add to cart" className="bg-base-100 p-3 rounded-full flex justify-center items-center hover:bg-[#B18B5E] hover:text-white transition-all duration-500">
                <span className="material-symbols-outlined">shopping_cart</span>
              </button>
              <button data-tooltip-id="my-tooltip" data-tooltip-content="Give a Like" className="bg-base-100 p-3 rounded-full flex justify-center items-center hover:bg-[#B18B5E] hover:text-white transition-all duration-500">
                <span className="material-symbols-outlined">thumb_up</span>
              </button>
                <Tooltip id="my-tooltip" />
            </div>
          </figure>
        </div>
        <div className="card-body">
          <h2 className="card-title flex justify-center font-garamond text-3xl">{item_name}</h2>
          <p className="text-center text-[#B18B5E] text-xl font-bold">${price} - <del className="text-gray-500 opacity-50">{oldPrice}</del></p>
        </div>
      </div>
    </div>
    );
};
SubCard.propTypes = {
    item: PropTypes.object,
  };
export default SubCard;