import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WeatherSunny32Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 2a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zm10.2 5.2a1 1 0 10-1.4-1.4l-1.5 1.5a1 1 0 001.4 1.4l1.5-1.5zM5.8 5.8a1 1 0 011.4 0l1.5 1.5a1 1 0 01-1.4 1.4L5.8 7.2a1 1 0 010-1.4zM16 9a7 7 0 100 14 7 7 0 000-14zm10 7.02a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zM3 15a1 1 0 100 2h2a1 1 0 100-2H3zm20.3 8.3a1 1 0 011.4 0l1.5 1.5a1 1 0 11-1.4 1.4l-1.5-1.5a1 1 0 010-1.4zM8.7 24.7a1 1 0 10-1.4-1.4l-1.5 1.5a1 1 0 101.4 1.4l1.5-1.5zm8.3 2.32a1 1 0 10-2 0V29a1 1 0 102 0v-1.98z" fill={primaryFill} /></svg>;
};

export default WeatherSunny32Filled;