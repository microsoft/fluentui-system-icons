import * as React from "react";

function wrapIcon(icon: JSX.Element, label?: string): JSX.Element {
    const containerProps: React.HTMLAttributes<HTMLSpanElement> = !!label ?
        {
            'aria-label': label,
            'aria-hidden': false
        }:
        {
            'aria-label': undefined,
            'aria-hidden': true
        }
        
    return React.createElement(
        'span',
        {
            ...containerProps
        },
        icon
    );
}

export default wrapIcon;