import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import MyCardDetails from "./MyCardDetails";
import NoData from "../Components/NoData";
import Spinner from "../Components/Spinner";

const MyCarft = () => {
  const [myItems, setMyItems] = useState([]);
  const [reRender, setReRender] = useState(false);
  const [sppinng, setSpinng] = useState(true);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`https://assigenment10.vercel.app/myCarftItems/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyItems(data);
        setSpinng(false);
      });
  }, [user, reRender]);
  if (sppinng) {
    return <Spinner></Spinner>;
  }
  if (myItems.length === 0) {
    return <NoData></NoData>;
  }

  const filter=(e)=>{
      const value = e.target.value
      if (!value) {
        return
      }

      fetch(`https://assigenment10.vercel.app/filtercraftItems?customization=${value}&&email=${user.email}`)
      .then(res=>res.json())
      .then(data=>{
          console.log(data);
          setMyItems(data)
      })

  }

//   const find=(e)=>{
//       console.log(e.target.value);
//   }
  return (
    <div className="container mx-auto p-4 mb-28">
      <div className="flex flex-col justify-center items-center mt-3">
        <p className="font-semibold text-xl text-center">Filter Items according ❛customization❜ </p>
        <select onClick={filter} className="px-6 py-3 mt-4 border bg-base-200 rounded-xl text-xl font-semibold">
        <option value="" selected>Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
        {/* <details onClick={find} className="dropdown">
          <summary className="m-1 btn">open or close</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </details> */}
      </div>
      <div className="grid lg:grid-cols-3 gap-6 mt-14">
        {myItems.map((item) => (
          <MyCardDetails
            key={item._id}
            item={item}
            reRender={reRender}
            setReRender={setReRender}
          ></MyCardDetails>
        ))}
      </div>
    </div>
  );
};

export default MyCarft;