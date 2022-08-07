import { Store } from "react-notifications-component";
const feedbackMessage = (item, action) => {
  switch (action) {
    case "ADD_TO_CART":
      return `${item.name.toUpperCase()} was added to CART`;
    case "MOVE_TO_WISHLIST":
      return `${item.name.toUpperCase()} was added to WISHLIST`;
    case "REMOVE_FROM_CART":
      return `${item.name.toUpperCase()} was removed from CART`;
    case "REMOVE_FROM_WISHLIST":
      return `${item.name.toUpperCase()} was removed from WISHLIST`;
    default:
      return "All set!";
  }
};
const notification = ({ item, action }) => {
  const feedback = feedbackMessage(item, action);
  Store.addNotification({
    title: feedback,
    type: "success",
    insert: "bottom",
    container: "bottom-left",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 5000,
      onScreen: true,
    },
  });
};
export default notification;
