import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WeatherHailNight24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 20a1 1 0 110 2 1 1 0 010-2zm-3.5-1a1 1 0 110 2 1 1 0 010-2zm7 0a1 1 0 110 2 1 1 0 010-2zM13 6c3.17 0 4.97 2.1 5.23 4.64h.08a3.69 3.69 0 110 7.36H7.69a3.69 3.69 0 110-7.36h.08A4.95 4.95 0 0113 6zM6.6 2a5.06 5.06 0 014.47 3.27c-1.98.56-3.4 2-4 3.95L7 9.46l-.06.24-.2.04c-1.15.24-2.14.9-2.81 1.81l-.16-.08a5.06 5.06 0 01-1.64-1.52.75.75 0 01.37-1.13c1.64-.59 2.53-1.25 3.03-2.21.55-1.06.66-2.18.29-3.68A.75.75 0 016.59 2z" fill={primaryFill} /></svg>;
};

export default WeatherHailNight24Filled;