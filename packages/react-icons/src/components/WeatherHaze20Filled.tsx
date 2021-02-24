import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WeatherHaze20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.52 10.02A4.48 4.48 0 005.6 9.3c.46-.04.92-.03 1.38.03 1.35.17 2.6.73 3.77 1.4.7.42 1.6.54 2.55.4.4-.05.78-.14 1.12-.27.06-.27.09-.56.09-.85z" fill={primaryFill} /><path d="M5.08 4.38L5 4.32a.5.5 0 00-.64.77l.86.86.07.05a.5.5 0 00.63-.76l-.85-.86z" fill={primaryFill} /><path d="M15.74 5.02a.5.5 0 00-.77-.64l-.85.86-.06.07a.5.5 0 00.76.64l.86-.86.06-.07z" fill={primaryFill} /><path d="M10.52 2.43a.5.5 0 00-1 .1v1.2l.02.1a.5.5 0 00.99-.1v-1.2l-.01-.1z" fill={primaryFill} /><path d="M3.74 11.94a4.81 4.81 0 013-.61c.97.12 1.96.53 3 1.14 1.21.7 2.6.83 3.84.66a7.47 7.47 0 003.21-1.22.5.5 0 00-.58-.82c-.66.47-1.67.9-2.77 1.05-1.1.15-2.23.03-3.19-.53a9.05 9.05 0 00-3.39-1.28 5.8 5.8 0 00-3.6.73.5.5 0 00.48.88z" fill={primaryFill} /><path d="M6.74 13.33a4.81 4.81 0 00-3 .6.5.5 0 01-.48-.87 5.8 5.8 0 013.6-.73c1.16.15 2.28.63 3.4 1.28.95.56 2.09.68 3.18.53 1.1-.15 2.11-.58 2.77-1.05a.5.5 0 01.58.82 7.47 7.47 0 01-3.2 1.22 5.96 5.96 0 01-3.84-.66 8.08 8.08 0 00-3.01-1.14z" fill={primaryFill} /><path d="M3.74 15.94a4.81 4.81 0 013-.61c.97.12 1.96.53 3 1.14 1.21.7 2.6.83 3.84.66a7.47 7.47 0 003.21-1.22.5.5 0 00-.58-.82c-.66.47-1.67.9-2.77 1.05-1.1.15-2.23.03-3.19-.53a9.05 9.05 0 00-3.39-1.28 5.8 5.8 0 00-3.6.73.5.5 0 00.48.88z" fill={primaryFill} /></svg>;
};

export default WeatherHaze20Filled;