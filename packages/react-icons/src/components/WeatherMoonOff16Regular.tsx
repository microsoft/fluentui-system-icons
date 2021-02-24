import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WeatherMoonOff16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.62 12.32l2.53 2.53a.5.5 0 00.7-.7l-13-13a.5.5 0 10-.7.7L6.38 7.1c-.86 1.93-2.75 2.58-3.97 2.8a.5.5 0 00-.36.71 6 6 0 009.57 1.72zm-.71-.7a4.98 4.98 0 01-7.65-.9 6 6 0 003.87-2.88l3.78 3.78z" fill={primaryFill} /><path d="M12.46 8c0 .69-.14 1.35-.4 1.94l.76.76A6 6 0 007.25 2a.5.5 0 00-.48.6c.13.66.2 1.4.15 2.2l.9.9a9.2 9.2 0 00.03-2.68A5 5 0 0112.45 8z" fill={primaryFill} /></svg>;
};

export default WeatherMoonOff16Regular;