import {createContext, useState} from "react";
import RightSide from "./components/RightSide";
import SideBar from "./components/SideBar";

export const StepContext = createContext(null);

function App() {
    const [step, setStep] = useState(1);
    const [info, setInfo] = useState({
        billing: "",
        name: "",
        email: "",
        phone: "",
        plan: "",
        pName: "",
        addons: [],
    });
    const [billing, setBilling] = useState("monthly");
    return (
        <StepContext.Provider value={{ step, setStep, info, setInfo, billing, setBilling }}>
            <div className="wrapper">
                <SideBar setStep={setStep} />
                <RightSide step={step} />
            </div>
        </StepContext.Provider>
    );
}

export default App;
