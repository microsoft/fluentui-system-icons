import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WeatherRain48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 7c6.34 0 9.93 4.2 10.45 9.26h.16a7.37 7.37 0 110 14.73h-.06l-4.3 7.16a1.75 1.75 0 01-3.08-1.66l.08-.14 3.21-5.36h-3.91l-4.3 7.16a1.75 1.75 0 01-3.08-1.66l.08-.14 3.21-5.36h-3.91l-4.3 7.16a1.75 1.75 0 01-3.08-1.66l.08-.14 3.21-5.36h-1.08a7.37 7.37 0 110-14.73h.16C14.07 11.16 17.66 7 24 7z" fill={primaryFill} /></svg>;
};

export default WeatherRain48Filled;