import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WeatherRain24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 4c3.17 0 4.97 2.1 5.23 4.63h.08a3.69 3.69 0 110 7.37h-.59l-1.58 2.63a.75.75 0 01-1.34-.66l.04-.09L15 16h-2.13l-1.59 2.63a.75.75 0 01-1.34-.66l.05-.09L11.12 16H9L7.4 18.63a.75.75 0 01-1.35-.66l.05-.09L7.26 16h-.57a3.69 3.69 0 110-7.37h.08A4.95 4.95 0 0112 4z" fill={primaryFill} /></svg>;
};

export default WeatherRain24Filled;