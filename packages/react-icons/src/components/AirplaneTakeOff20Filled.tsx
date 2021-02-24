import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AirplaneTakeOff20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.3 5.49l.38-.33A4.9 4.9 0 0114.5 4c.2 0 .38.02.55.06 1.24.24 2.15 1.22 2.67 1.93.6.8.1 1.82-.74 2.09L12.8 9.43l-3.1 4c-.97 1.26-2.97.35-2.65-1.2l.29-1.47-3.02 1.04A1.75 1.75 0 012 10.15V7.16c0-.08 0-.15.02-.22.16-.9 1.28-1.21 1.9-.62.1.1.18.2.25.34l.59 1.23 5.8-1.94c.26-.08.5-.25.74-.46z" fill={primaryFill} /><path d="M5.38 6.62l3.73-1.24-1.6-1.1a1.6 1.6 0 00-2.17 2.3l.04.04z" fill={primaryFill} /><path d="M2.75 16.5a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5H2.75z" fill={primaryFill} /></svg>;
};

export default AirplaneTakeOff20Filled;