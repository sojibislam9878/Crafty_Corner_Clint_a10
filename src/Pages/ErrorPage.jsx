import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center h-screen">
          <Helmet>
        <title>404 not found</title>
      </Helmet>
      <div className="text-center">
        <div className="w-2/3 mx-auto">
            <img src="errorpage.png" alt=""/>
        </div>
        <h1 className="text-4xl font-bold">Oppos! You Are Lost!</h1>
        <p className="text-lg font-medium text-red-600 mt-4">404 Not Found</p>
        <Link to="/">
          <button className="btn mt-4 bg-[#B18B5E] hover:bg-[#997851] text-white text-xl">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
    );
};

export default ErrorPage;