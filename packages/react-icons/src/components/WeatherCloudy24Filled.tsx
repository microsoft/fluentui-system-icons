import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WeatherCloudy24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 7c3.17 0 4.97 2.1 5.23 4.64h.08a3.69 3.69 0 110 7.36H7.69a3.69 3.69 0 110-7.36h.08A4.95 4.95 0 0113 7zm-3-3c1.62 0 3.05.82 3.9 2.06a7.5 7.5 0 00-.9-.05c-3 0-5.17 1.68-5.94 4.21l-.06.24-.06.24-.2.04a4.68 4.68 0 00-3.46 3.04A3.28 3.28 0 015.1 7.9h.25A4.72 4.72 0 0110 4z" fill={primaryFill} /></svg>;
};

export default WeatherCloudy24Filled;