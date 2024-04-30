

import useAuth from "../Hooks/useAuth";
import { useEffect, useState } from "react";
import SubCard from "./SubCard";
import Spinner from "./Spinner";

const AllCategory = () => {
    const {subCategory}=useAuth()
    // const filtersubcategoy = allsubcategory.filter(items=>items.subcategory_name ===subCategory)
    // console.log(filtersubcategoy);
    const [sppinng, setSpinng] =useState(true)

    const [data, setData]=useState([])
    useEffect(()=>{
        fetch(`https://assigenment10.vercel.app/subItems?subcategory_name=${subCategory}`)
        .then(res=>res.json())
        .then(datas=>{
            console.log(datas);
            setData(datas)
            setSpinng(false)
        })
    },[subCategory])

    if (sppinng) {
        return <Spinner></Spinner>
      }


    return (
        <div className="container mx-auto p-4 mb-28">
            <h1 className="text-3xl font-bold mt-8">All Craft & Art Related to <span className="text-orange-600">{subCategory}</span> Is Here :</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
            {
                data.map(item=><SubCard key={item._id} item={item}></SubCard>)
            }
            </div>

        </div>
    );
};

export default AllCategory;