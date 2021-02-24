import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WeatherMoon48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M37.9 33a18 18 0 01-30.4 1.23c-.51-.73-.18-1.74.65-2.04 6.78-2.42 10.41-5.24 12.52-9.26 2.22-4.23 2.79-8.87 1.24-15.23a1.35 1.35 0 011.38-1.67A18 18 0 0137.9 33.01z" fill={primaryFill} /></svg>;
};

export default WeatherMoon48Filled;