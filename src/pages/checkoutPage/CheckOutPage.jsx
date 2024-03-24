import { useSelector } from "react-redux";
import CheckOut from "../../components/checkout/CheckOut";

const CheckoutPage = () => {
    const { cartList } = useSelector((state) => state.cart)


  return (
    <div className="checkout-page">
      <CheckOut cartList={cartList} /> 
    </div>
  );
};

export default CheckoutPage;
