import useAuth from "../Hooks/useAuth";

const AllCategory = () => {
    const {subCategory}=useAuth()
    return (
        <div>
            <h1>{subCategory}</h1>
        </div>
    );
};

export default AllCategory;