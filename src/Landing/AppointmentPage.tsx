import { InlineWidget } from "react-calendly";
import React from "react";
import AppContainer from "../Dashboard/AppContainer";

const AppointmentPage = () => {
    return (
        <AppContainer>
            <div className="Category3">
                <InlineWidget url="https://calendly.com/antoshoba" />
            </div>
        </AppContainer>
    );
};

export default AppointmentPage;