import { createContext, useContext, useReducer } from "react";
import AuthReducer from "../reducer/auth-reducer";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const loginUser = async () => {
    let response;
    try {
      response = await axios.post("/api/auth/login", {
        email: authState.userEmail,
        password: authState.userPassword,
      });
    } catch (e) {
      console.log(e);
    } finally {
      authDispatch({ type: "UPDATE_USER", payload: response.data });
    }
  };

  const [authState, authDispatch] = useReducer(AuthReducer, {
    isLoggedIn: false,
    userEmail: "adarshbalika@gmail.com",
    userPassword: "adarshbalika",
    remember_me: false,
    loginUser,
    user: {},
    encodedToken: "",
  });

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
