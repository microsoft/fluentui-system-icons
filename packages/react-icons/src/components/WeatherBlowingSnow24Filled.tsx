import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WeatherBlowingSnow24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.75 9.5a3.25 3.25 0 01.18 6.49h-.2l-.11.01h-.8c.12.31.18.65.18 1 0 1.66-1.26 3-2.93 3-1.3 0-2.23-.63-2.69-1.63a1 1 0 011.77-.93l.1.2c.14.23.37.36.82.36.53 0 .93-.42.93-1a1 1 0 00-.9-1H3a1 1 0 01-.12-2H18.7l.19-.01a1.25 1.25 0 10-1.26-1.8l-.1.23a1 1 0 01-1.83-.8 3.25 3.25 0 013.06-2.13zm-9 8a.75.75 0 110 1.5.75.75 0 010-1.5zm2-14a4.25 4.25 0 01.02 8.5H3a1 1 0 01-.12-2h9.02a2.25 2.25 0 10-2.4-2.25 1 1 0 01-2 0c0-2.35 1.9-4.25 4.25-4.25zm7.5 3a.75.75 0 110 1.5.75.75 0 010-1.5zM5.75 5a.75.75 0 110 1.5.75.75 0 010-1.5z" fill={primaryFill} /></svg>;
};

export default WeatherBlowingSnow24Filled;