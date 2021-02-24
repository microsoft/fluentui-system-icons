import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WeatherFog24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.74 19.5h8.5a.75.75 0 01.1 1.5h-8.6a.75.75 0 01-.1-1.5h8.6-8.5zm-2.99-2.98h14.5a.75.75 0 01.1 1.5H4.75a.75.75 0 01-.1-1.5h.1zM12 3c3.17 0 4.97 2.1 5.23 4.64h.08a3.69 3.69 0 110 7.36H6.69a3.69 3.69 0 110-7.36h.08A4.95 4.95 0 0112 3z" fill={primaryFill} /></svg>;
};

export default WeatherFog24Filled;