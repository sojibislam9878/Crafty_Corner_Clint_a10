import { useParams } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const UpdateItems = () => {
    const {user}=useAuth()
    const [craftItems, setCraftItems]=useState({})

    const {id}= useParams()
    useEffect(()=>{
        fetch(`http://localhost:3000/singleCard/${id}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setCraftItems(data)
        })
    },[user, id]) 

    const {photo, item_name, rating, price, processing_time, customization, stock_status, subcategory_name , short_description}=craftItems
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
      
      const {email, displayName}=user || {}
    
      const onSubmit = (data) => {
        console.log(data);
        const updatedDataWithAuthorInfo ={...data , email, displayName}
        console.log(updatedDataWithAuthorInfo);
        fetch(`http://localhost:3000/updateCard/${id}`, {
            method:"PUT", 
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(updatedDataWithAuthorInfo)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if (data.modifiedCount) {
              console.log("succes");
              reset()
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Item Update Success",
                showConfirmButton: false,
                timer: 1500
              });
              
            }
        })
      };
      return (

        <div className="container mx-auto p-4 bg-base-300 mt-32 rounded-lg shadow-xl">
          {/* section header  */}
          <div className="text-center">
            <h1>Wanna Update {item_name} details ?</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro ipsum
              numquam ex exercitationem, excepturi vel!
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className=" py-16 px-28">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p>Item Name :</p>
                <input
                  type="text"
                  defaultValue={item_name}
                  required
                  placeholder="Item Name"
                  {...register("item_name", { required: true })}
                  className=" py-4 w-full  rounded-lg mt-3 px-4 outline-none bg-base-100"
                />
                {errors.item_name && (
                  <span className="text-red-600">Give a Update Value</span>
                )}
              </div>
              <div>
                <p>Subcategory Name :</p>
                <input
                  list="subcategory"
                  type="text"
                  placeholder="Subcategory Name"
                  defaultValue={subcategory_name }
                  required
                  {...register("subcategory_name",{ required: true })}
                  className=" py-4 w-full  rounded-lg mt-3 px-4 outline-none bg-base-100"
                />
                <datalist id="subcategory">
                  <option value="Clay Sculpture"></option>
                  <option value="Stone Sculpture"></option>
                  <option value="Metal Sculpture"></option>
                  <option value="Wood carving"></option>
                  <option value="Natural Material Sculpture"></option>
                  <option value="Beaded Sculpture"></option>
                </datalist>
                {errors.subcategory_name && (
                  <span className="text-red-600">Give a Update Value</span>
                )}
              </div>
              <div>
                <p>Short Description :</p>
                <input
                  type="text"
                  placeholder="Short Description"
                  defaultValue={short_description}
                  {...register("short_description", { required: true })}
                  className=" py-4 w-full  rounded-lg mt-3 px-4 outline-none bg-base-100"
                />
                {errors.short_description && (
                  <span className="text-red-600">Give a Update Value</span>
                )}
              </div>
              <div>
                <p>Price :</p>
                <input
                  type="text"
                  placeholder="Price"
                  defaultValue={price}
                  {...register("price", { required: true })}
                  className=" py-4 w-full  rounded-lg mt-3 px-4 outline-none bg-base-100"
                />
                {errors.price && <span className="text-red-600">Give a Update Value</span>}
              </div>
              <div>
                <p>Rating :</p>
                <input
                  type="text"
                  placeholder="Rating "
                  defaultValue={rating }
                  {...register("rating", { required: true })}
                  className=" py-4 w-full  rounded-lg mt-3 px-4 outline-none bg-base-100"
                />
                {errors.rating && (
                  <span className="text-red-600">Give a Update Value</span>
                )}
              </div>
              <div>
                <p>Customization :</p>
                <input
                  type="text"
                  placeholder="Customization Yes or No"
                  defaultValue={customization }
                  {...register("customization", { required: true })}
                  className=" py-4 w-full  rounded-lg mt-3 px-4 outline-none bg-base-100"
                />
                {errors.customization && (
                  <span className="text-red-600">Give a Update Value</span>
                )}
              </div>
              <div>
                <p>Processing Time :</p>
                <input
                  type="text"
                  placeholder="Processing Time"
                  defaultValue={processing_time}
                  {...register("processing_time", { required: true })}
                  className=" py-4 w-full  rounded-lg mt-3 px-4 outline-none bg-base-100"
                />
                {errors.processing_time && (
                  <span className="text-red-600">Give a Update Value</span>
                )}
              </div>
              <div>
                <p>Stock Status :</p>
                <input
                  list="stock"
                  type="text"
                  {...register("stock_status", { required: true })}
                  placeholder="stock status"
                  defaultValue={stock_status}
                  className=" py-4 w-full  rounded-lg mt-3 px-4 outline-none bg-base-100"
                />
                <datalist id="stock">
                  <option value="In stock"></option>
                  <option value="Made to order"></option>
                </datalist>
                {errors.stock_status && (
                  <span className="text-red-600">Give a Update Value</span>
                )}
              </div>
              {/* <input type="text" className=" border" />
                    <input type="text" className=" border" />
                    <input type="text" className=" border" />
                    <input type="text" className=" border" />
                    <input type="text" className=" border" />
                    <input type="text" className=" border" />
                    <input type="text" className=" border" /> */}
            </div>
            <div className="mt-6">
              <p>Photo URL :</p>
              <input
                type="url"
                placeholder="Enter item photo url"
                defaultValue={photo}
                {...register("photo", { required: true })}
                className=" py-4 w-full  rounded-lg mt-3 px-4 outline-none bg-base-100"
              />
              {errors.photo && (
                <span className="text-red-600">Give a Update Value</span>
              )}
            </div>
            <input
              type="submit"
              value="Update Item"
              className="border w-full btn mt-6"
            />
          </form>
        </div>
      );
};

export default UpdateItems;