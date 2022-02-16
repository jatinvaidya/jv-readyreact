import { useAuth0 } from "@auth0/auth0-react";

let Login = () => {
    let { loginWithRedirect } = useAuth0;
    loginWithRedirect();
}

export default Login;