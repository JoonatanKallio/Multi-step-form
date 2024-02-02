import Switch from "react-switch";
import React, {useContext, useEffect, useState} from "react";
import arcadeIcon from "../assets/icon-arcade.svg";
import advancedIcon from "../assets/icon-advanced.svg";
import proIcon from "../assets/icon-pro.svg";
import NextButton from "./NextButton";
import BackButton from "./BackButton";
import {StepContext} from "../App";

export default function SelectPlan() {
    const [checked, setChecked] = useState(false);
    const { step, setStep, info, setInfo } = useContext(StepContext);

    useEffect(() => {
        if (info.plan > 15) {
            setChecked(true);
        }
    }, [info.plan]);
    function handleChange(val) {
        setInfo({ ...info, addons: [] });
        setChecked(val);
    }
    function handleClick() {
        if (info.plan) {
            setStep(step + 1);
        }
    }
    if (!checked) {
        return (
            <div className="step2">
                <div className="step2-header">
                    <h1>Select plan</h1>
                    <p>You have the option of monthly or yearly billing.</p>
                </div>
                <div className="step2-plan-wrapper">
                    <MonthlyPlan planIcon={arcadeIcon} planName="Arcade" planPrice={9} info={info} setInfo={setInfo}/>
                    <MonthlyPlan planIcon={advancedIcon} planName="Advanced" planPrice={12} info={info} setInfo={setInfo}/>
                    <MonthlyPlan planIcon={proIcon} planName="Pro" planPrice={15} info={info} setInfo={setInfo}/>
                </div>
                <div className="step2-billing">
                    <label>
                        <span style={{ color: "#022a5a", fontWeight: "bold" }}>Monthly</span>
                        <Switch
                            className="step2-switch"
                            checked={checked}
                            onChange={handleChange}
                            uncheckedIcon={false}
                            checkedIcon={false}
                            handleDiameter={20}
                            offColor="#022a5a"
                            onColor="#022a5a"
                        />
                        <span style={{ color: "#9699ab", fontWeight: "bold" }}>Yearly</span>
                    </label>
                </div>
                <div className="button-wrapper">
                    <BackButton />
                    <button className="next-button" type="button" onClick={handleClick}>Next Step</button>
                </div>
            </div>
        );
    }
    return (
        <div className="step2">
            <div className="step2-header">
                <h1>Select plan</h1>
                <p>You have the option of monthly or yearly billing.</p>
            </div>
            <div className="step2-plan-wrapper">
                <YearlyPlan planIcon={arcadeIcon} planName="Arcade" planPrice={90} info={info} setInfo={setInfo}/>
                <YearlyPlan planIcon={advancedIcon} planName="Advanced" planPrice={120} info={info} setInfo={setInfo}/>
                <YearlyPlan planIcon={proIcon} planName="Pro" planPrice={150} info={info} setInfo={setInfo}/>
            </div>
            <div className="step2-billing">
                <label>
                    <span style={{ color: "#9699ab", fontWeight: "bold" }}>Monthly</span>
                    <Switch
                        className="step2-switch"
                        checked={checked}
                        onChange={handleChange}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        handleDiameter={20}
                        offColor="#022a5a"
                        onColor="#022a5a"
                    />
                    <span style={{ color: "#022a5a", fontWeight: "bold" }}>Yearly</span>
                </label>
            </div>
            <div className="button-wrapper">
                <BackButton />
                <NextButton />
            </div>
        </div>
    );
}

function MonthlyPlan({ planIcon, planName, planPrice, info, setInfo }) {
    function handleClick() {
        setInfo({...info, plan: planPrice, pName: planName, billing: "Monthly" });
    }
    const className = info.plan === planPrice ? "step2-plan selected" : "step2-plan";
    return (
        <div className={`${className}`} onClick={handleClick}>
            <img src={planIcon} alt="Plan icon" />
            <div>
                <h2>{planName}</h2>
                <p className="price">
                    $
                    {planPrice}
                    /mo
                </p>
            </div>
        </div>
    );
}

function YearlyPlan({ planIcon, planName, planPrice, info, setInfo }) {
    function handleClick() {
        setInfo({...info, plan: planPrice, pName: planName, billing: "Yearly" });
    }

    const className = info.plan === planPrice ? "step2-plan selected" : "step2-plan";
    return (
        <div className={`${className}`} onClick={handleClick} style={{ height: "190px" }}>
            <img src={planIcon} alt="Plan icon" />
            <div>
                <h2>{planName}</h2>
                <p className="price">
                    $
                    {planPrice}
                    /yr
                </p>
                <p>2 months free</p>
            </div>
        </div>
    );
}
