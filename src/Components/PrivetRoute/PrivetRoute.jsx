import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Spinner from "../Spinner";

const PrivetRoute = ({children}) => {
    const {user , loading}=useAuth()
    const location = useLocation()

    if (loading) {
        return <Spinner></Spinner>
    }
    if (!user) {
        return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};
PrivetRoute.propTypes = {
    children: PropTypes.element.isRequired,
  };
export default PrivetRoute;