import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Home/Footers/Footers";
import Header from "./Components/Home/Header/Header";
import Home from "./Components/Home/Home/Home";
import Navbar from "./Components/Home/Navbar/Navbar";
import NotFound from "./Components/NotFound/NotFound";
import AboutUs from "./Components/PagesAllComponents/AboutUs/AboutUs";
import Checkout from "./Components/PagesAllComponents/Checkout/Checkout";
import Contact from "./Components/PagesAllComponents/Contact/Contact";
import FAQ from "./Components/PagesAllComponents/FAQ/FAQ";
import ForgotPassword from "./Components/PagesAllComponents/ForgotPassword/ForgotPassword";
import Login from "./Components/PagesAllComponents/Login/Login";
import ChangePassword from "./Components/PagesAllComponents/MyAccountPages/ChangePassword/ChangePassword";
import ManageAddress from "./Components/PagesAllComponents/MyAccountPages/ManageAddress/ManageAddress";
import MyAccount from "./Components/PagesAllComponents/MyAccountPages/MyAccount/MyAccount";
import ProfileInformation from "./Components/PagesAllComponents/MyAccountPages/ProfileInformation/ProfileInformation";
import Wishlist from "./Components/PagesAllComponents/MyAccountPages/Wishlist/Wishlist";
import MyOrderHistory from "./Components/PagesAllComponents/MyOrderHistory/MyOrderHistory";
import OrderHistoryDetails from "./Components/PagesAllComponents/MyOrderHistory/OrderHistoryDetails";
import MyReturns from "./Components/PagesAllComponents/MyReturns/MyReturns";
import ReturnOrderDetails from "./Components/PagesAllComponents/MyReturns/ReturnOrderDetails";
import MyReviews from "./Components/PagesAllComponents/MyReviews/MyReviews";
import ReviewsDetails from "./Components/PagesAllComponents/MyReviews/ReviewsDetails";
import OrderCancellation from "./Components/PagesAllComponents/OrderCancellations/OrderCancellation";
import OrderComplete from "./Components/PagesAllComponents/OrderComplete/OrderComplete";
import Payment from "./Components/PagesAllComponents/Payment/Payment";
import PaymentMethods from "./Components/PagesAllComponents/PaymentMethods/PaymentMethods";
import Registered from "./Components/PagesAllComponents/Registered/Registered";
import TrackOrder from "./Components/PagesAllComponents/TrackOrder/TrackOrder";
import Voucher from "./Components/PagesAllComponents/Voucher/Voucher";
import ProductDetails from "./Components/Shoppages/ProductDetails/ProductDetails";
import Shopgridview from "./Components/Shoppages/Shopgridview";
import Shoplistview from "./Components/Shoppages/Shoplistview";
import Shoppingcart from "./Components/Shoppages/Shoppingcart/Shoppingcart";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="gridview" element={<Shopgridview />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="listview" element={<Shoplistview />} />
        <Route path="shoppingcart" element={<Shoppingcart />} />
        <Route path="productDetails" element={<ProductDetails />} />
        <Route path="register" element={<Registered />} />
        <Route path="login" element={<Login />} />
        <Route path="myAccount" element={<MyAccount />} />
       <Route path="myAccount/profileInfo" element={<ProfileInformation />} />
         <Route path="myAccount/manageAddress" element={<ManageAddress />} />
       <Route path="myAccount/changePassword" element={<ChangePassword />} />
        <Route path="myAccount/wishlist" element={<Wishlist />} />
       <Route path="shop/checkout" element={<Checkout />} />
       <Route path="shop/payment" element={<Payment />} />
        <Route path="trackorder" element={<TrackOrder />} />
        <Route path="orderComplete" element={<OrderComplete />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
         
        <Route path="myAccount/myOrderHistory" element={<MyOrderHistory />} />
       <Route path="myAccount/myReturns" element={<MyReturns />} />
         <Route path="myAccount/orderCancel" element={<OrderCancellation />} />
        <Route path="myAccount/myReviews" element={<MyReviews />} />
        <Route path="myAccount/payment" element={<Voucher />} />
        <Route path="myAccount/paymentMethods" element={<PaymentMethods />} />
        <Route path="myAccount/returnOrderDetails" element={<ReturnOrderDetails />} />
        <Route path="myAccount/reviewsDetails" element={<ReviewsDetails />} />
        <Route path="myAccount/orderDetails" element={<OrderHistoryDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
