import useAuth from "../Hooks/useAuth";

const Home = () => {
    const {user}=useAuth()
    console.log(user);
    return (
        <div>
            <h1>I am home</h1>
        </div>
    );
};

export default Home;