import * as React from 'react';

export interface ILabelIconProps extends React.HTMLAttributes<HTMLElement> {
    'aria-label': string,
    'aria-hidden': false | undefined
}