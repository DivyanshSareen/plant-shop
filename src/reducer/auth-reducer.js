const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      console.log(state.userEmail, state.userPassword, state.remember_me);
      return state;
    case "UPDATE_FORM_ELEMENT":
      console.log(state);
      return { ...state, [action.field]: action.payload };
    case "TOGGLE_ELEMENT":
      console.log(action);
      return { ...state, [action.field]: !action.payload };
    default:
      return state;
  }
};

export default AuthReducer;
