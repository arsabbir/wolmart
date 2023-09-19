import { useDispatch, useSelector } from "react-redux";
import { createToast } from "../../utils/toast.js";
import { setMessageEmpty } from "../../features/auth/authSlice.js";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { emailVerify } from "../../features/auth/authApiSlice.js";

const Verify = () => {
    const { error, message, user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSearchParams();

    useEffect(() => {
        if (error) {
            createToast(error);
            dispatch(setMessageEmpty());
        }
        if (message) {
            createToast(message, "success");
            dispatch(setMessageEmpty());
        }
        if (user) {
            // Commented out the emailVerify call and navigate
            // dispatch(emailVerify(token));
            // navigate("/");
        }
    }, [error, message, user]);

    useEffect(() => {
        if (user) {
            dispatch(emailVerify(token));
            navigate("/");
        }
    }, [user]);

    return (
        <>Hello</>
    );
}

export default Verify;
