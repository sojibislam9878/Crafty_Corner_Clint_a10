import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const CraftItemCard = ({ item }) => {
  const { item_name, photo, _id } = item;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl h-full overflow-hidden group ">
        <div className=" ">
          <figure className="relativ overflow-hidden">
            <img src={photo} alt="Shoes" />
            <div className="absolute h-1/5 w-full flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <Link to= {`/details/${_id}`}><button className="btn"> add card</button></Link>
            </div>
            <div className="absolute h-full w-1/5 lg:w-1/5 bg-black bg-opacity-0 flex  flex-col gap-5 items-center justify-center -right-10 group-hover:right-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <button className="bg-base-100 p-3 rounded-full flex justify-center items-center hover:bg-yellow-400 hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined">favorite</span>
              </button>
              <button className="bg-base-100 p-3 rounded-full flex justify-center items-center hover:bg-yellow-400 hover:text-white transition-all duration-500">
                <span className="material-symbols-outlined">shopping_cart</span>
              </button>
              <button className="bg-base-100 p-3 rounded-full flex justify-center items-center hover:bg-yellow-400 hover:text-white transition-all duration-500">
                <span className="material-symbols-outlined">thumb_up</span>
              </button>
            </div>
          </figure>
        </div>
        <div className="card-body group-hover:hidden">
          <h2 className="card-title">{item_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    </div>
  );
};

CraftItemCard.propTypes = {
  item: PropTypes.object,
};
export default CraftItemCard;
