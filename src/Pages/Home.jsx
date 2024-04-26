import useAuth from "../Hooks/useAuth";
import Slider from "../Components/Slider";
import { useLoaderData } from "react-router-dom";

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
          <h1>Sculpture and Modeling Items</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
            blanditiis eos labore aliquam quod. Reprehenderit?
          </p>
        </div>
        {/* cards  */}
        <div>
          {/* {
                craftItems.map(item=><h1>hello</h1>)
            } */}

          <div className="card card-compact w-96 bg-base-100 shadow-xl overflow-hidden">
            <figure className="bg-[url('https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg')] w-full h-52 bg-center bg-no-repeat object-cover group-hover:scale-105" >
                <div className="h-10 w-10 bg-red-500 group-hover:bg-slate-600">

                </div>
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
