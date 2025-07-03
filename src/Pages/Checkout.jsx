import { useState, useContext, useEffect } from "react";
import UserInfo from "../Components/Checkout/UserInfo";
import PaymentInfo from "../Components/Checkout/PaymentInfo";
import Confirmation from "../Components/Checkout/Confirmation";
import { ShopContext } from "../Context/ShopContext";
import CheckoutProgress from "../Components/Checkout/CheckoutProgress";


export default function Checkout(){
    const [step, setStep] = useState(0);
    const { clearCart } = useContext(ShopContext);

    function onCheckoutContinueClick(){
        setStep(1);
    } 
    function onCheckoutPayClick(){
        setStep(2);
    } 
    useEffect(() => {
        if(step === 2){
            clearCart();
        }
        
    }, [step]);
    
    return(
        <>
            <CheckoutProgress currentStep={step} />
            {step === 0 && (
                <UserInfo handleContinueClick={onCheckoutContinueClick} />
            )}

            {step === 1 && (
                <PaymentInfo handlePayClick={onCheckoutPayClick}/>
            )}
            {step === 2 && (
                <Confirmation />
            )}
        </>
    )
}