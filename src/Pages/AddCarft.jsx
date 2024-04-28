import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";

const AddCarft = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const {user}=useAuth()
  console.log(user);
  const {email, displayName}=user

  const onSubmit = (data) => {
    console.log(data);
    
    const dataWithAuthorInfo ={...data , email, displayName}
    console.log(dataWithAuthorInfo);
    fetch("http://localhost:3000/craftitems", {
        method:"POST", 
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(dataWithAuthorInfo)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if (data.insertedId) {
          console.log("succes");
          reset()
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Item Add Successfully",
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
        <h1>Add a new Item</h1>
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
              placeholder="Item Name"
              {...register("item_name", { required: true })}
              className=" py-4 w-full  rounded-lg mt-3 px-4 outline-none bg-base-100"
            />
            {errors.item_name && (
              <span className="text-red-600">Enter item name</span>
            )}
          </div>
          <div>
            <p>Subcategory Name :</p>
            <input
              list="subcategory"
              type="text"
              placeholder="Subcategory Name"
              {...register("subcategory_name", { required: true })}
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
              <span className="text-red-600">Select a subcategory</span>
            )}
          </div>
          <div>
            <p>Short Description :</p>
            <input
              type="text"
              placeholder="Short Description"
              {...register("short_description", { required: true })}
              className=" py-4 w-full  rounded-lg mt-3 px-4 outline-none bg-base-100"
            />
            {errors.short_description && (
              <span className="text-red-600">Write a short description</span>
            )}
          </div>
          <div>
            <p>Price :</p>
            <input
              type="text"
              placeholder="Price"
              {...register("price", { required: true })}
              className=" py-4 w-full  rounded-lg mt-3 px-4 outline-none bg-base-100"
            />
            {errors.price && <span className="text-red-600">Enter price</span>}
          </div>
          <div>
            <p>Rating :</p>
            <input
              type="text"
              placeholder="Rating "
              {...register("rating", { required: true })}
              className=" py-4 w-full  rounded-lg mt-3 px-4 outline-none bg-base-100"
            />
            {errors.rating && (
              <span className="text-red-600">Give a default rating</span>
            )}
          </div>
          <div>
            <p>Customization :</p>
            <input
              type="text"
              placeholder="Customization Yes or No"
              {...register("customization", { required: true })}
              className=" py-4 w-full  rounded-lg mt-3 px-4 outline-none bg-base-100"
            />
            {errors.customization && (
              <span className="text-red-600">Write Yes or No</span>
            )}
          </div>
          <div>
            <p>Processing Time :</p>
            <input
              type="text"
              placeholder="Processing Time"
              {...register("processing_time", { required: true })}
              className=" py-4 w-full  rounded-lg mt-3 px-4 outline-none bg-base-100"
            />
            {errors.processing_time && (
              <span className="text-red-600">Processing time</span>
            )}
          </div>
          <div>
            <p>Stock Status :</p>
            <input
              list="stock"
              type="text"
              {...register("stock_status", { required: true })}
              placeholder="stock status"
              className=" py-4 w-full  rounded-lg mt-3 px-4 outline-none bg-base-100"
            />
            <datalist id="stock">
              <option value="In stock"></option>
              <option value="Made to order"></option>
            </datalist>
            {errors.stock_status && (
              <span className="text-red-600">Select one</span>
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
            {...register("photo", { required: true })}
            className=" py-4 w-full  rounded-lg mt-3 px-4 outline-none bg-base-100"
          />
          {errors.photo && (
            <span className="text-red-600">give a photo url</span>
          )}
        </div>
        <input
          type="submit"
          value="add item"
          className="border w-full btn mt-6"
        />
      </form>
    </div>
  );
};

export default AddCarft;
