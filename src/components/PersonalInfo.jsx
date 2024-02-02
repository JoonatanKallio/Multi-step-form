import React, {useContext, useEffect, useState} from "react";
import {StepContext} from "../App";
import isEmail from "validator/es/lib/isEmail";
import isMobilePhone from "validator/es/lib/isMobilePhone";
import isEmpty from "validator/es/lib/isEmpty";

export default function PersonalInfo() {
    const { step, setStep, info, setInfo } = useContext(StepContext);
    const [error, setError] = useState({
        nameError: "",
        emailError: "",
        phoneError: "",
    });
    function validation() {
        const validatorObject = { nameError: "", emailError: "", phoneError: "" };
        if (isEmpty(info.name)) {
            validatorObject.nameError = "Name is not valid";
        }
        if (!isEmail(info.email)) {
            validatorObject.emailError = "Email is not valid";
        }
        if (!isMobilePhone(info.phone)) {
            validatorObject.phoneError = "Phone number is not valid";
        }
        // eslint-disable-next-line max-len
        if (!validatorObject.nameError && !validatorObject.emailError && !validatorObject.phoneError) {
            return true;
        }
        setError(validatorObject);
        return false;
    }
    function handleClick() {
        if (validation()) {
            setStep(step + 1);
        }
    }

    return (
        <div className="step1">
            <div className="step1-header">
                <h1>Personal Info</h1>
                <p>Please provide your name, email address and phone number.</p>
            </div>
            <form className="step1-form">
                <label className="step1-label" htmlFor="name">
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <p>Name</p>
                        <span style={{color: "hsl(354, 84%, 57%)"}}>{error.nameError}</span>
                    </div>
                    <input id="name" value={info.name} className="step1-form-input" type="name" name="name" placeholder="e.g. Stephen King" onChange={(e) => setInfo({ ...info, name: e.target.value })} />
                </label>
                <label className="step1-label" htmlFor="email">
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <p>Email</p>
                        <span style={{color: "hsl(354, 84%, 57%)"}}>{error.emailError}</span>
                    </div>
                    <input id="email" value={info.email} className="step1-form-input" type="email" name="email" placeholder="e.g. stephenking@lorem.com" onChange={(e) => setInfo({...info, email: e.target.value})}/>
                </label>
                <label className="step1-label" htmlFor="phone">
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <p>Phone number</p>
                        <span style={{color: "hsl(354, 84%, 57%)"}}>{error.phoneError}</span>
                    </div>
                    <input id="phone" value={info.phone} className="step1-form-input" type="tel" name="phone" placeholder="e.g. +1 234 567 890" onChange={(e) => setInfo({ ...info, phone: e.target.value })} />

                </label>
            </form>
            <div className="step1-button-wrapper">
                <button type="button" onClick={handleClick}>Next Step</button>
            </div>
        </div>

    );
}
