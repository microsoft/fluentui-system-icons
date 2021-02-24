import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WeatherRainSnow24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.53 17.55a.75.75 0 110 1.5.75.75 0 010-1.5zM12 4c3.17 0 4.97 2.1 5.23 4.63h.08a3.69 3.69 0 110 7.37H16a.75.75 0 01-1.43 0H8.99L7.4 18.62a.75.75 0 01-1.35-.65l.05-.1L7.26 16h-.57a3.69 3.69 0 110-7.37h.08A4.95 4.95 0 0112 4zm-.42 12.7c.33.2.46.6.32.94l-.05.09-.55.9a.75.75 0 01-1.35-.66l.05-.1.55-.9a.75.75 0 011.03-.27zm5.45.1a.75.75 0 110 1.5.75.75 0 010-1.5z" fill={primaryFill} /></svg>;
};

export default WeatherRainSnow24Filled;