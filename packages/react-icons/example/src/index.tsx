import * as React from "react";
import { render } from "react-dom";
import { AccessTime24Filled, IFluentIconsProps, wrapIcon } from "@fluentui/react-icons";

function App() {
    const cProps: IFluentIconsProps = {
        className: "AccessTime24",
        primaryFill: "blue"
    };
    const WrappedElement = wrapIcon(<AccessTime24Filled />);
	return (
		<div>
            <AccessTime24Filled  {...cProps} /> 
            <WrappedElement  {...cProps} aria-label="WrappedAccessTime24Filled" />
        </div >
    );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);