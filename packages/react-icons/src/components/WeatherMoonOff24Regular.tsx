import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WeatherMoonOff24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l8.2 8.2c-1.18 2.19-3.2 3.73-6.93 5.07a.75.75 0 00-.36 1.13 10 10 0 0015.1 1.6l2.49 2.5a.75.75 0 001.06-1.06L3.28 2.22zm13.88 16a8.5 8.5 0 01-12.2-.62c3.27-1.3 5.28-2.88 6.55-5.03l5.65 5.65z" fill={primaryFill} /><path d="M15.62 4.64a8.5 8.5 0 013.35 11.15l1.11 1.11a10 10 0 00-8.17-14.89.75.75 0 00-.77.93c.5 2.07.6 3.81.35 5.37l1.27 1.27c.45-1.76.5-3.7.06-5.96.98.17 1.92.51 2.8 1.02z" fill={primaryFill} /></svg>;
};

export default WeatherMoonOff24Regular;