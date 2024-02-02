import BackButton from "./BackButton";
import NextButton from "./NextButton";
import React, {useContext, useState} from "react";
import {StepContext} from "../App";

export default function Summary() {

    const { info, setStep } = useContext(StepContext);
    function handleClick() {
        setStep(2);
    }
    function handleConfirm() {
        setStep(5);
    }
    let addonPrice = 0;
    info.addons.forEach((addon) => {
        addonPrice += addon.price;
    });
    let plan = "yr";
    let planLength = "year";
    if (info.billing === "Monthly") {
        plan = "mo";
        planLength = "month";
    }

    return (
        <div className="step-4">
            <div className="step4-wrapper">
                <div className="step4-header">
                    <h1>Finishing up</h1>
                    <p>Double-check everything looks OK before confirming.</p>
                </div>
                <div className="step4-bill">
                    <div className="step4-pricing">
                        <div className="step4-plan">
                            <div className="step4-plan-title">
                                <p>
                                    {info.pName}
                                    {" "}
                                    (
                                    {info.billing}
                                    )
                                </p>
                                <button type="button" onClick={handleClick}>Change</button>
                            </div>
                            <p>
                                $
                                {info.plan}
                                {plan}
                            </p>
                        </div>
                        <div className="step4-addons">
                            {info.addons.map((addon) => {
                                return (
                                    <div key={addon.id} className="step4-addon">
                                        <p className="step4-addon-name">{addon.name}</p>
                                        <p className="step4-addon-price">
                                            +$
                                            {addon.price}
                                            {plan}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="step4-total">
                    <p className="step4-total-text">
                        Total (per
                        {" "}
                        {planLength}
                        )
                    </p>
                    <p className="step4-total-price">
                        +$
                        {info.plan + addonPrice}
                        /
                        {plan}
                    </p>
                </div>
            </div>
            <div className="button-wrapper">
                <BackButton/>
                <button className="confirm-button" type="button" onClick={handleConfirm}>Confirm</button>
            </div>
        </div>
    );
}
