import { useState, useContext, useEffect } from "react";
import UserInfo from "../Components/Checkout/UserInfo";
import PaymentInfo from "../Components/Checkout/PaymentInfo";
import Confirmation from "../Components/Checkout/Confirmation";
import { ShopContext } from "../Context/ShopContext";
import CheckoutProgress from "../Components/Checkout/CheckoutProgress";
import Review from "../Components/Checkout/Review";
import CartItems from '../Components/CartItems/CartItems'


export default function Checkout(){
    const [step, setStep] = useState(0);
    const { clearCart } = useContext(ShopContext);

    function handleCheckoutClicked(){
        setStep(1);
    } 

    function onCheckoutContinueClick(){
        setStep(2);
    } 
    function onCheckoutPayClick(){
        setStep(3);
    } 
    function handleSubmitReview(){
        setStep(4);
    }
    useEffect(() => {
        if(step === 4){
            clearCart();
        }
        
    }, [step]);
    
    return(
        <>
            <CheckoutProgress currentStep={step} />
            {step === 0 && (
                <CartItems onCheckoutClicked={handleCheckoutClicked}/>
            )}

            {step === 1 && (
                <UserInfo handleContinueClick={onCheckoutContinueClick} />
            )}

            {step === 2 && (
                <PaymentInfo handlePayClick={onCheckoutPayClick}/>
            )}
            {step === 3 && (
                <Review handleSubmitReview={handleSubmitReview}/>
            )}
            {step === 4 && (
                <Confirmation />
            )}
        </>
    )
}