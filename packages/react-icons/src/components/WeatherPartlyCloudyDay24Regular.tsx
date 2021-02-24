import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WeatherPartlyCloudyDay24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 8c3.17 0 4.97 2.1 5.23 4.64h.08a3.69 3.69 0 110 7.36H7.69a3.69 3.69 0 110-7.36h.08A4.95 4.95 0 0113 8zm0 1.5a3.86 3.86 0 00-3.87 3.9c0 .35-.32.63-.69.63h-.69c-1.26 0-2.28 1-2.28 2.24a2.26 2.26 0 002.28 2.23h10.5c1.26 0 2.29-1 2.29-2.23a2.26 2.26 0 00-2.29-2.24h-.69c-.36 0-.68-.28-.68-.64 0-2.28-1.8-3.89-3.88-3.89zm-8.63 2.66c.14.35 0 .75-.32.94l-.09.04-.92.39a.75.75 0 01-.67-1.34l.1-.05.92-.38c.38-.16.82.02.98.4zm6.48-4.83l-.17.06c-.53.19-1.02.44-1.46.75a2.44 2.44 0 00-2.8 3.67c-.48.14-.94.36-1.36.64a3.94 3.94 0 015.8-5.12zm-7.9.03l.1.04.92.38A.75.75 0 013.5 9.2l-.1-.04-.93-.38a.75.75 0 01.47-1.42zm3.8-2.99l.05.1.39.92a.75.75 0 01-1.35.67l-.04-.1-.38-.92a.75.75 0 011.34-.67zm4.36-.31c.35.14.53.52.44.87l-.03.1-.39.93a.75.75 0 01-1.42-.47l.04-.1.38-.93c.16-.38.6-.56.98-.4z" fill={primaryFill} /></svg>;
};

export default WeatherPartlyCloudyDay24Regular;