import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WeatherRainShowersNight48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M26 12c6.34 0 9.93 4.2 10.46 9.26h.16a7.37 7.37 0 110 14.73h-.07l-4.3 7.16a1.75 1.75 0 01-3.08-1.66l.08-.14 3.21-5.36h-3.91l-4.3 7.16a1.75 1.75 0 01-3.08-1.66l.08-.14 3.21-5.36h-3.91l-4.3 7.16a1.75 1.75 0 01-3.08-1.66l.08-.14 3.21-5.36H15.4a7.37 7.37 0 110-14.73h.16C16.07 16.16 19.66 12 26 12zM13.18 4a10.12 10.12 0 018.94 6.54 11.46 11.46 0 00-8.03 8.05l-.09.33-.11.48-.42.08a9.35 9.35 0 00-5.61 3.63l-.31-.17a10.12 10.12 0 01-3.28-3.03A1.5 1.5 0 015 17.64c3.28-1.17 5.05-2.5 6.06-4.43 1.1-2.1 1.31-4.35.58-7.35A1.5 1.5 0 0113.18 4z" fill={primaryFill} /></svg>;
};

export default WeatherRainShowersNight48Filled;