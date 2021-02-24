import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WeatherSunnyHigh48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M25.25 5.25a1.25 1.25 0 10-2.5 0v1.5a1.25 1.25 0 102.5 0v-1.5z" fill={primaryFill} /><path d="M24 10a8 8 0 100 16 8 8 0 000-16z" fill={primaryFill} /><path d="M4.29 43.55c.44.53 1.23.6 1.76.16h.01a4.2 4.2 0 01.27-.22 27.69 27.69 0 014.48-2.6A31.4 31.4 0 0124 38a31.4 31.4 0 0113.18 2.88 27.7 27.7 0 014.71 2.78l.05.04v.01c.54.44 1.33.37 1.77-.16.68-.88-.16-1.76-.16-1.76l-.03-.03-.04-.03-.04-.03a12.8 12.8 0 00-1.3-.93 30.2 30.2 0 00-3.9-2.15A33.9 33.9 0 0024 35.5c-6 0-10.87 1.56-14.23 3.12a30.2 30.2 0 00-5.21 3.08l-.08.06-.02.02c-.44.36-.51 1.36-.17 1.77z" fill={primaryFill} /><path d="M24 28c.69 0 1.25.56 1.25 1.25v1.5a1.25 1.25 0 11-2.5 0v-1.5c0-.69.56-1.25 1.25-1.25z" fill={primaryFill} /><path d="M10 17.25c0-.69.56-1.25 1.25-1.25h1.5a1.25 1.25 0 110 2.5h-1.5c-.69 0-1.25-.56-1.25-1.25z" fill={primaryFill} /><path d="M35.25 16a1.25 1.25 0 100 2.5h1.5a1.25 1.25 0 100-2.5h-1.5z" fill={primaryFill} /><path d="M15.63 11.63c-.48.5-1.28.5-1.76 0l-1.5-1.5a1.25 1.25 0 011.76-1.76l1.5 1.5c.5.48.5 1.28 0 1.76z" fill={primaryFill} /><path d="M13.87 24.37a1.25 1.25 0 011.76 1.76l-1.5 1.5a1.25 1.25 0 01-1.76-1.76l1.5-1.5z" fill={primaryFill} /><path d="M32.37 11.63c.48.5 1.28.5 1.76 0l1.5-1.5a1.25 1.25 0 00-1.76-1.76l-1.5 1.5a1.25 1.25 0 000 1.76z" fill={primaryFill} /><path d="M34.13 24.37a1.25 1.25 0 00-1.76 1.76l1.5 1.5a1.25 1.25 0 001.76-1.76l-1.5-1.5z" fill={primaryFill} /></svg>;
};

export default WeatherSunnyHigh48Filled;