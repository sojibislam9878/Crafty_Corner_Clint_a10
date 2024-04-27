import { useEffect } from "react";
import useAuth from "../Hooks/useAuth";

const MyCarft = () => {
    const {user}=useAuth()
    console.log(user)
    useEffect(()=>{
        fetch(`http://localhost:3000/myCarftItems/${user.email}`)
    },[])
    return (
        <div>
            <h1>my carft</h1>
        </div>
    );
};

export default MyCarft;