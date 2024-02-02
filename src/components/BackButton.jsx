import React, { useContext } from "react";
import { StepContext } from "../App";

export default function BackButton() {
    const { step, setStep } = useContext(StepContext);
    function handleClick() {
        setStep(step - 1);
    }

    return (
        <button className="back-button" type="button" onClick={handleClick}>Go Back</button>
    );
}
