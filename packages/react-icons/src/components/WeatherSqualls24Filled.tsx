import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WeatherSqualls24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.75 9.5a3.25 3.25 0 01.18 6.49h-.2l-.11.01h-.8c.12.31.18.65.18 1 0 1.66-1.26 3-2.93 3-1.3 0-2.23-.63-2.69-1.63a1 1 0 011.77-.93l.1.2c.14.23.37.36.82.36.53 0 .93-.42.93-1a1 1 0 00-.9-1H3a1 1 0 01-.12-2h15.87l.13-.01a1.25 1.25 0 10-1.26-1.8l-.1.23a1 1 0 01-1.83-.8 3.25 3.25 0 013.06-2.13zm-7 2.5H3a1 1 0 01-.12-2h8.87A2.25 2.25 0 109.5 7.75a1 1 0 01-2 0 4.25 4.25 0 114.48 4.24l-.23.01H3h8.75z" fill={primaryFill} /></svg>;
};

export default WeatherSqualls24Filled;