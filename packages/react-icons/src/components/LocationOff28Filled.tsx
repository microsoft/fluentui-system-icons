import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const LocationOff28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l3.53 3.53A9.7 9.7 0 004.25 12c0 4.03 2.77 8.4 8.23 13.19l.38.33c.66.56 1.62.56 2.28 0a40.2 40.2 0 004.67-4.65l4.9 4.91a.75.75 0 001.07-1.06L3.28 2.22zM14.64 15.7a3.75 3.75 0 01-4.33-4.33l4.33 4.33z" fill={primaryFill} /><path d="M7.72 4.54l4.29 4.28A3.75 3.75 0 0117.18 14l4.43 4.44c1.42-2.24 2.14-4.38 2.14-6.43A9.75 9.75 0 007.72 4.54z" fill={primaryFill} /></svg>;
};

export default LocationOff28Filled;