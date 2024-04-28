import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import MyCardDetails from "./MyCardDetails";
import NoData from "../Components/NoData";
import Spinner from "../Components/Spinner";

const MyCarft = () => {
    const [myItems, setMyItems]=useState([])
    const [reRender, setReRender]=useState(false)
    const [sppinng, setSpinng] =useState(true)
    const {user}=useAuth()
    useEffect(()=>{
        fetch(`http://localhost:3000/myCarftItems/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setMyItems(data)
            setSpinng(false)
        })
    },[user, reRender])
    if (sppinng) {
        return <Spinner></Spinner>
        
      }
    if (myItems.length === 0) {
        return <NoData></NoData>
    }
    return (
        <div className="container mx-auto p-4">
            <div className="grid lg:grid-cols-3 gap-6 mt-14">
            {
                myItems.map(item=><MyCardDetails key={item._id} item={item} reRender={reRender} setReRender={setReRender}></MyCardDetails>)
            }
            </div>
        </div>
    );
};

export default MyCarft;