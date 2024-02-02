import BackButton from "./BackButton";
import NextButton from "./NextButton";
import React, {useContext, useEffect, useRef} from "react";
import {StepContext} from "../App";

export default function AddOns() {
    const { info } = useContext(StepContext);
    if (info.billing === "Monthly") {
        return (
            <div className="step3">
                <div className="step3-header">
                    <h1>Pick add-ons</h1>
                    <p>Add-ons help enhance your gaming experience.</p>
                </div>
                <div className="step3-addons-wrapper">
                    <AddOn header="Online services" desc="Access to multiplayer games" price={1} text="/mo" addOnID={1} />
                    <AddOn header="Larger storage" desc="Extra 1TB of cloud save" price={2} text="/mo" addOnID={2} />
                    <AddOn header="Customizable profile" desc="Custom theme on your profile" price={2} text="/mo" addOnID={3} />
                </div>
                <div className="button-wrapper">
                    <BackButton />
                    <NextButton />
                </div>
            </div>
        );
    }
    return (
        <div className="step3">
            <div className="step3-header">
                <h1>Pick add-ons</h1>
                <p>Add-ons help enhance your gaming experience.</p>
            </div>
            <div className="step3-addons-wrapper">
                <AddOn header="Online services" desc="Access to multiplayer games" price={10} text="/yr" addOnID={1} />
                <AddOn header="Larger storage" desc="Extra 1TB of cloud save" price={20} text="/yr" addOnID={2} />
                <AddOn header="Customizable profile" desc="Custom theme on your profile" price={20} text="/yr" addOnID={3} />
            </div>
            <div className="button-wrapper">
                <BackButton />
                <NextButton />
            </div>
        </div>
    );
}

function AddOn({ header, desc, price, addOnID, text }) {
    const { info, setInfo } = useContext(StepContext);
    const addOnList = info.addons;
    const checkBoxRef = useRef(null);
    const divRef = useRef(null);
    useEffect(() => {
        if (divRef.current && divRef.current.classList.contains("selected")) {
            if (checkBoxRef.current) {
                checkBoxRef.current.checked = true;
            }
        } else {
            if (checkBoxRef.current) {
                checkBoxRef.current.checked = false;
            }
        }
    }, []);
    function handleClick(addOnName, addOnPrice) {
        let found = false;
        const newObject = {
            id: addOnID,
            name: addOnName,
            price: addOnPrice,
        };
        let newList = [];
        addOnList.forEach((addon) => {
            if (addon.id === addOnID) {
                found = true;
            }
        });
        if (found) {
            newList = addOnList.filter((addon) => addon.id !== addOnID);
            checkBoxRef.current.checked = false;
        } else {
            checkBoxRef.current.checked = true;
            newList.push(...addOnList, newObject);
        }
        setInfo({ ...info, addons: [...newList] });
    }
    let className = "step3-addon";
    addOnList.forEach((addon) => {
        if (addon.id === addOnID) {
            className = "step3-addon selected";
        }
    });
    return (
        <div className={`${className}`} onClick={() => handleClick(header, price)} ref={divRef}>
            <div className="step3-addon-right">
                <input type="checkbox" ref={checkBoxRef} />
                <div>
                    <h2>{header}</h2>
                    <p>{desc}</p>
                </div>
            </div>
            <p className="step3-addon-price">
                +$
                {price}
                {text}
            </p>
        </div>
    );
}
