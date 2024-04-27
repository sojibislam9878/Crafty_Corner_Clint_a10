import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import MyCardDetails from "./MyCardDetails";

const MyCarft = () => {
    const [myItems, setMyItems]=useState([])
    const {user}=useAuth()
    useEffect(()=>{
        fetch(`http://localhost:3000/myCarftItems/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setMyItems(data)
        })
    },[user])
    return (
        <div className="container mx-auto p-4">
            <h1>my carft {myItems.length}</h1>
            <div className="grid lg:grid-cols-3 gap-6 mt-14">
            {
                myItems.map(item=><MyCardDetails key={item._id} item={item}></MyCardDetails>)
            }
            </div>
        </div>
    );
};

export default MyCarft;