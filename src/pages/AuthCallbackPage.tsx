import { useAuth0 } from "@auth0/auth0-react"
import { useCreateMyUser } from "../api/MyUserApi";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthCallbackPage() {


    const navigate = useNavigate();

    //use ref will not render the page whenever the state will change 
    const hasCreatedUser = useRef(false)
    const { user } = useAuth0();
    // const { createUser, isLoading, isError, isSuccess } = useCreateMyUser();
    const { createUser } = useCreateMyUser();

    useEffect(() => {
        if (user?.sub && user?.email && !hasCreatedUser.current) {
            createUser({ auth0Id: user.sub, email: user.email });
            hasCreatedUser.current = true;


        }
        navigate("/")
    }, [createUser, navigate, user])


    return <>Loading...</>
}
