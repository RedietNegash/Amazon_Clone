import React, { useEffect } from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CheckOut from "./Components/CheckOut/CheckOut";
import Payment from "./Components/Payment/Payment";
import Login from "./Components/Login/Login";
import { useStateValue } from "./Components/Context/StateProvider";
import { auth } from "./Components/Firebase";
// import CheckOut from './CheckOut/CheckOut';
// import LogIn from './Login/Login';
// import Payment from './Payment/Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Order/Orders";
const stripePromise = loadStripe(
  "pk_test_51NQrwfIlXxtnNnAT28DBTBPxNFn2Cc034zhzV5q3kkz1lCOWlb1YUWiPuUDWeCJKgn6VGmWCNM0QIredOsannUcT00rZq0Op8Y"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/checkout" exact element={<CheckOut />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Orders" element={<Orders />} />

        <Route
          path="/payment"
          element={<Elements stripe={stripePromise}>{<Payment />}</Elements>}
        />
      </Routes>
    </>
  );
}

export default App;
