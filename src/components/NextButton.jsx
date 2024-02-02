import React, { useContext } from "react";
import { StepContext } from "../App";

export default function NextButton() {
    const { step, setStep } = useContext(StepContext);
    function handleClick() {
        setStep(step + 1);
    }

    return (
        <button className="next-button" type="button" onClick={handleClick}>Next Step</button>
    );
}
