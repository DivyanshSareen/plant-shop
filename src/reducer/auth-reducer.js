const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      state.loginUser();
      return state;
    case "UPDATE_FORM_ELEMENT":
      return { ...state, [action.field]: action.payload };
    case "TOGGLE_ELEMENT":
      return { ...state, [action.field]: !action.payload };
    case "UPDATE_USER":
      return {
        ...state,
        encodeToken: action.payload.encodeToken,
        user: action.payload.foundUser,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

export default AuthReducer;
