import thankyouIcon from "../assets/icon-thank-you.svg";

export default function ThankYouScreen() {
    return (
        <div className="step5">
            <div className="step5-content">
                <img className="step5-icon" src={thankyouIcon} alt="Checkmark icon"/>
                <h1>Thank you!</h1>
                <p>
                    {/* eslint-disable-next-line max-len */}
                    Thanks for confirming your subscription! We hope you have fun using our platform.
                    If you ever need support, please feel free to email us at lorem@ipsum.com.
                </p>
            </div>
        </div>
    );
}
