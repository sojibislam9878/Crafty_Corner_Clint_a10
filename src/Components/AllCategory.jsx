

import useAuth from "../Hooks/useAuth";
import { useEffect, useState } from "react";
import CraftItemCard from "./CraftItemCard";

const AllCategory = () => {
    const {subCategory}=useAuth()
    // const filtersubcategoy = allsubcategory.filter(items=>items.subcategory_name ===subCategory)
    // console.log(filtersubcategoy);

    const [data, setData]=useState([])
    useEffect(()=>{
        fetch(`https://assigenment10.vercel.app/subItems?subcategory_name=${subCategory}`)
        .then(res=>res.json())
        .then(datas=>{
            console.log(datas);
            setData(datas)
        })
    },[subCategory])


    return (
        <div className="container mx-auto p-4">
            <h1>{subCategory}</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
            {
                data.map(item=><CraftItemCard key={item._id} item={item}></CraftItemCard>)
            }
            </div>

        </div>
    );
};

export default AllCategory;