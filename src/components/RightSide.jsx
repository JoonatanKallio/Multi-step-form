import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";
import AddOns from "./AddOns";
import Summary from "./Summary";
import ThankYouScreen from "./ThankYouScreen";

export default function RightSide({ step }) {
    if (step === 1) {
        return (
            <PersonalInfo />
        );
    }
    if (step === 2) {
        return (
            <SelectPlan />
        );
    }
    if (step === 3) {
        return (
            <AddOns />
        );
    }
    if (step === 4) {
        return (
            <Summary />
        );
    }
    return (
        <ThankYouScreen />
    );
}
