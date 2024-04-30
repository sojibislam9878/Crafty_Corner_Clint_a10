import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
const Registion = () => {
  const { user } = useAuth();
  console.log(user);
  // navigate
  const navigate = useNavigate();
  const Locations = useLocation();
  const form = Locations?.state || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isHide, setIsHide] = useState(false);
  const handleHide = () => {
    setIsHide(!isHide);
  };
  const { createUserWithEmail, updateUser} = useAuth();

  // create profile and update user
  const onSubmit = (data) => {
    const { email, password, name, photo } = data;
    createUserWithEmail(email, password, toast).then(() => {
      updateUser(name, photo);
      navigate(form);
    });
  };
  return (
    <div className="flex justify-center p-4 pt-10 pb-16 bg-gradient-to-bl from-indigo-500 via-purple-500 to-pink-500">
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <div className=" rounded-lg p-6 md:w-2/3 xl:w-1/3 mx-auto shadow-xl bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-4xl font-bold mt-12">Register New Account.</h1>
          <p className="font-medium mt-6 opacity-70">
            Let get you all set up so you can verify your personal account and
            begin settion up your profile
          </p>
          <div className="flex justify-center items-center gap-2 border-b-2">
            <span className="material-symbols-outlined mt-10 text-2xl">
              account_circle
            </span>
            <input
              placeholder="Full Name"
              {...register("name", { required: true })}
              className="w-full py-4  outline-none mt-10 bg-base-100"
            />
          </div>
          {errors.name && (
            <span className="text-red-600">Enter Your Full Name</span>
          )}
          <div className="flex justify-center items-center gap-2 border-b-2">
            <span className="material-symbols-outlined mt-6">image</span>
            <input
            type="url"
              placeholder="Your Photo URL"
              {...register("photo", { required: true })}
              className="w-full py-4  outline-none mt-6 bg-base-100"
            />
          </div>
          {errors.photo && (
            <span className="text-red-600">Give Your Photo URL</span>
          )}
          <div className="flex justify-center items-center gap-2 border-b-2">
          <span className="material-symbols-outlined mt-6 text-2xl">
                alternate_email
              </span>
          <input
          type="email"
            placeholder="Your Email"
            {...register("email", { required: true })}
            className="w-full py-4  outline-none mt-6 bg-base-100"
          />
          </div>
          {errors.email && <span className="text-red-600">Enter Email</span>}
          <div className="relative">
            <div  className="flex justify-center items-center gap-2 border-b-2">
            <span className="material-symbols-outlined mt-6 text-2xl">lock</span>
            <input
              type={isHide ? "text" : "password"}
              placeholder="Your Password"
              {...register("password", { required: true })}
              className="w-full py-4 outline-none mt-6 bg-base-100"
            />
            </div>
            <p
              className="absolute right-5 top-11 hover:cursor-pointer"
              onClick={handleHide}
            >
              {isHide ? (
                <span className="material-symbols-outlined">
                  visibility_off
                </span>
              ) : (
                <span className="material-symbols-outlined">visibility</span>
              )}
            </p>
          </div>
          {errors.password && (
            <span className="text-red-600">Enter Password</span>
          )}
          <input
            type="submit"
            value="Create Account"
            className="btn w-full bg-blue-500 text-white text-lg mt-6"
          />
        </form>
        <p className="text-center mt-6 mb-28 font-medium opacity-80 text-lg">
          <span className="opacity-80">Already have an account?</span>{" "}
          <Link to="/login">
            <span className="text-blue-500 font-bold">Login</span>
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Registion;
