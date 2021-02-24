import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WifiWarning20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 3a1 1 0 00-1 1v8a1 1 0 001.96.3v-.03A1 1 0 0011 12V4a1 1 0 00-1-1z" fill={primaryFill} /><path d="M12 12v-.87a4.13 4.13 0 011.82 2 .75.75 0 01-1.37.6 2.73 2.73 0 00-.63-.9A2 2 0 0012 12z" fill={primaryFill} /><path d="M13.53 10.51c-.45-.45-.97-.8-1.53-1.04v-1.6a6.41 6.41 0 013.78 3.23.75.75 0 11-1.33.69 5.13 5.13 0 00-.92-1.28z" fill={primaryFill} /><path d="M15.67 8.62A7.93 7.93 0 0012 6.54V5a9.42 9.42 0 015.84 3.9.75.75 0 01-1.23.86c-.28-.4-.6-.8-.94-1.14z" fill={primaryFill} /><path d="M3.34 7.56A9.42 9.42 0 018 5.01v1.54a7.93 7.93 0 00-4.53 3.2.75.75 0 01-1.23-.85c.34-.49.71-.95 1.1-1.34z" fill={primaryFill} /><path d="M5.48 9.45A6.42 6.42 0 018 7.9V9.5a4.93 4.93 0 00-2.37 2.27.75.75 0 01-1.34-.67c.3-.61.7-1.16 1.19-1.65z" fill={primaryFill} /><path d="M7.11 11.84c.27-.27.57-.5.89-.67V12a2 2 0 00.2.87l-.03.03c-.22.23-.4.5-.54.81a.75.75 0 01-1.38-.6c.21-.47.5-.9.86-1.27z" fill={primaryFill} /><path d="M10.92 13.88a1.24 1.24 0 11-1.76 1.76 1.24 1.24 0 011.76-1.76z" fill={primaryFill} /></svg>;
};

export default WifiWarning20Filled;