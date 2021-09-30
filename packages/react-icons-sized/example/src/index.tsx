import * as React from "react";
import { render } from "react-dom";
import AccessTimeFilled from "./components/AccessTimeFilled";
import AccessTimeRegular from "./components/AccessTimeRegular";

const App = () => {
    return (
        <div>
            <AccessTimeFilled />
            <AccessTimeRegular />
        </div>
    )
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);