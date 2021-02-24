import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WeatherMoonOff28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l10.4 10.4c-.9 1.34-2.23 2.4-3.73 3.24a22.06 22.06 0 01-5.32 2 .75.75 0 00-.47 1.1 12 12 0 0018.6 2.73l3.02 3.03a.75.75 0 001.06-1.06L3.28 2.22z" fill={primaryFill} /><path d="M13.87 10.7l9.74 9.73a12 12 0 00-9.16-18.4.75.75 0 00-.78.94c.51 2.05.9 4.92.2 7.72z" fill={primaryFill} /></svg>;
};

export default WeatherMoonOff28Filled;