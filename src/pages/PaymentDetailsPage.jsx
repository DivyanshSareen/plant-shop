/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
const FINMO_APP_KEY =
  "QUtfRklOTU9fU0JYX0VDMzMxRkU0MDg4MjRFRDNBRENCMzA5NTQ5OUFFQzY0OlNLX0ZJTk1PX1NCWF8wMjhGMTJGMl84MkYzXzQ5ODhfODIwQV8yNjA1NjMwNzY0OEI=";

const PaymentDetailsPage = () => {
  // eslint-disable-next-line
  const [checkoutId, setCheckoutId] = useState(localStorage.getItem("checkout_id"));
  const [details, setDetails] = useState({});
  useEffect(() => {
    if (checkoutId) {
      let config = {
        method: "get",
        url: `https://api.qafinmo.net/v1/checkout/${checkoutId}`,
        headers: {
          Authorization: `Basic ${FINMO_APP_KEY}`,
        },
      };

      axios(config)
        .then(function (response) {
          setDetails(response.data);
          console.log(details)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    // eslint-disable-next-line
  }, []);
  return <div>Checkout ID: {details.checkoutId}</div>;
};

export default PaymentDetailsPage;
