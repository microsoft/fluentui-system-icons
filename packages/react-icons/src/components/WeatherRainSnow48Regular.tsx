import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WeatherRainSnow48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M29.07 35.12a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM24 7c6.34 0 9.93 4.2 10.46 9.26h.16a7.37 7.37 0 110 14.73h-2.67a1.5 1.5 0 01-1.38 2.07A1.5 1.5 0 0129.18 31H17.42l-.04.1-.07.12-3.5 6.07a1.5 1.5 0 01-2.66-1.38l.07-.12 2.76-4.79h-.6a7.37 7.37 0 110-14.73h.17C14.07 11.16 17.66 7 24 7zm-.65 26.32c.68.39.94 1.22.62 1.92l-.07.13-1.08 1.89a1.5 1.5 0 01-2.66-1.38l.06-.12 1.09-1.9a1.5 1.5 0 012.04-.54zm10.72.3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM24 9.5a8.04 8.04 0 00-7.97 8.2c0 .76-.66 1.35-1.41 1.35H13.2a4.7 4.7 0 00-4.7 4.72 4.7 4.7 0 004.7 4.73h21.6a4.7 4.7 0 004.7-4.73 4.7 4.7 0 00-4.7-4.72h-1.42c-.75 0-1.4-.59-1.4-1.34A8 8 0 0024 9.5z" fill={primaryFill} /></svg>;
};

export default WeatherRainSnow48Regular;