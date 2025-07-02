import { useState } from "react";
import UserInfo from "../Components/Checkout/UserInfo";
import PaymentInfo from "../Components/Checkout/PaymentInfo";
import Confirmation from "../Components/Checkout/Confirmation";

export default function Checkout(){
    const [step, setStep] = useState('checkout');

    function onCheckoutContinueClick(){
        setStep('paymentInfo');
    } 
    function onCheckoutPayClick(){
        setStep('confirmation');
    } 
    return(
        <>
            {step === 'checkout' && (
                <UserInfo handleContinueClick={onCheckoutContinueClick} />
            )}

            {step === 'paymentInfo' && (
                <PaymentInfo handlePayClick={onCheckoutPayClick}/>
            )}
            {step === 'confirmation' && (
                <Confirmation/>
            )}
        </>
    )
}