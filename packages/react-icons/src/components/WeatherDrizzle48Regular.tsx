import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WeatherDrizzle48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 6c6.34 0 9.93 4.2 10.45 9.26h.16a7.37 7.37 0 110 14.73H32.9V30h-.59l-1.97 3.38a1.25 1.25 0 11-2.16-1.26l1.24-2.13h-4.26V30h-.85l-1.97 3.38a1.25 1.25 0 11-2.16-1.26l1.24-2.13h-4V30h-1.1l-1.98 3.38a1.25 1.25 0 11-2.16-1.26l1.24-2.13h-.03a7.37 7.37 0 110-14.73h.16C14.07 10.16 17.66 6 24 6zm0 2.5a8.04 8.04 0 00-7.98 8.2c0 .76-.65 1.35-1.4 1.35H13.2a4.7 4.7 0 00-4.7 4.72 4.7 4.7 0 004.7 4.73h21.6a4.7 4.7 0 004.7-4.73 4.7 4.7 0 00-4.7-4.72h-1.42c-.75 0-1.4-.59-1.4-1.34A8 8 0 0024 8.5z" fill={primaryFill} /><path d="M17.63 34.67c.6.35.8 1.11.45 1.71l-1.75 3a1.25 1.25 0 11-2.16-1.26l1.75-3c.35-.6 1.11-.8 1.71-.45z" fill={primaryFill} /><path d="M26.08 36.38a1.25 1.25 0 10-2.16-1.26l-1.75 3a1.25 1.25 0 102.16 1.26l1.75-3z" fill={primaryFill} /></svg>;
};

export default WeatherDrizzle48Regular;