import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WeatherMoonOff48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.38 4.62a1.25 1.25 0 10-1.76 1.76L20.84 22.6l-.17.33c-2.1 4.02-5.74 6.84-12.52 9.26-.83.3-1.16 1.31-.66 2.04a18 18 0 0027.52 2.55l6.6 6.6a1.25 1.25 0 001.77-1.76l-37-37z" fill={primaryFill} /><path d="M31.31 8.42a18 18 0 016.74 24.33l-15.49-15.5c.43-2.77.25-5.87-.65-9.55a1.35 1.35 0 011.38-1.67c2.8.15 5.54.96 8.02 2.4z" fill={primaryFill} /></svg>;
};

export default WeatherMoonOff48Filled;