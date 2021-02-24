import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ClosedCaption24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.75 4C20.55 4 22 5.46 22 7.25v9.5c0 1.8-1.46 3.25-3.25 3.25H5.25A3.25 3.25 0 012 16.75v-9.5a3.25 3.25 0 013.07-3.24L5.25 4h13.5zm-8.13 4.6C8.22 7.22 5.5 8.85 5.5 12c0 3.14 2.72 4.77 5.12 3.4a.75.75 0 00-.74-1.3C8.48 14.9 7 14 7 12s1.48-2.9 2.88-2.1a.75.75 0 00.74-1.3zm7.5 0C15.72 7.22 13 8.85 13 12c0 3.14 2.72 4.77 5.12 3.4a.75.75 0 00-.74-1.3c-1.4.8-2.88-.1-2.88-2.1s1.48-2.9 2.88-2.1a.75.75 0 00.74-1.3z" fill={primaryFill} /></svg>;
};

export default ClosedCaption24Filled;