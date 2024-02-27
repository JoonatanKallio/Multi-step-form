import React, { createContext, useContext, useEffect, useState } from "react";
import sidebarDesktop from "../assets/bg-sidebar-desktop.svg";
import sidebarMobile from "../assets/bg-sidebar-mobile.svg";
import { StepContext } from "../App";

const ButtonContext = createContext(null);
export default function SideBar() {
    const [selected, setSelected] = useState(1);
    const { step, setStep } = useContext(StepContext);
    useEffect(() => {
        setSelected(step);
    }, [step]);
    return (
        <ButtonContext.Provider value={{
            selected, setSelected, setStep,
        }}
        >
            <div className="sidebar">
                <picture>
                    <source srcSet={sidebarMobile} media="(max-width: 1000px)" />
                    <img className="sidebarImage" src={sidebarDesktop} alt="Sidebar graphics" />
                </picture>
                <div className="sidebar-button-wrapper">
                    <StepNumber stepText="STEP 1" stepHeader="YOUR INFO" value={1} />
                    <StepNumber stepText="STEP 2" stepHeader="SELECT PLAN" value={2} />
                    <StepNumber stepText="STEP 3" stepHeader="ADD-ONS" value={3} />
                    <StepNumber stepText="STEP 4" stepHeader="SUMMARY" value={4} />
                </div>
            </div>
        </ButtonContext.Provider>
    );
}

function StepNumber({ stepText, stepHeader, value }) {
    const { selected } = useContext(ButtonContext);

    const className = selected === value ? "number selected" : "number";
    return (
        <div className="sidebar-button">
            <div className={`${className}`}><p>{value}</p></div>
            <div className="sidebar-text">
                <p className="step-text">{stepText}</p>
                <h2 className="step-header-text">{stepHeader}</h2>
            </div>
        </div>
    );
}
