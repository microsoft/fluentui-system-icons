import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WeatherSunnyLow48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 13.08A10.92 10.92 0 0134.74 26h8.01a1.25 1.25 0 110 2.5H5.25a1.25 1.25 0 110-2.5h8.01A10.92 10.92 0 0124 13.08z" fill={primaryFill} /><path d="M11.5 9.8l.1.1 2.15 2.14a1.25 1.25 0 01-1.66 1.86l-.1-.09-2.15-2.15A1.25 1.25 0 0111.5 9.8z" fill={primaryFill} /><path d="M38.14 9.9c.46.45.49 1.17.1 1.66l-.1.1L36 13.81a1.25 1.25 0 01-1.86-1.67l.09-.1 2.15-2.14a1.25 1.25 0 011.76 0z" fill={primaryFill} /><path d="M24 4c.65 0 1.18.49 1.24 1.12l.01.13v3.03a1.25 1.25 0 01-2.5.13V5.25c0-.7.56-1.25 1.25-1.25z" fill={primaryFill} /><path d="M21.25 38a1.25 1.25 0 100 2.5h5.5a1.25 1.25 0 100-2.5h-5.5z" fill={primaryFill} /><path d="M12 33.25c0-.69.56-1.25 1.25-1.25h21.5a1.25 1.25 0 110 2.5h-21.5c-.69 0-1.25-.56-1.25-1.25z" fill={primaryFill} /></svg>;
};

export default WeatherSunnyLow48Filled;