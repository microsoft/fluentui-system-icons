import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Channel16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.5 6.55a1 1 0 01-1-1 1 1 0 111 1z" fill={primaryFill} /><path d="M2.18 3.58a2.01 2.01 0 011.06.11C3.5 3.28 3.97 3 4.5 3h7c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 013 11.5V7.49a2 2 0 01-1 0v4.01A2.5 2.5 0 004.5 14h7a2.5 2.5 0 002.5-2.5v-7A2.5 2.5 0 0011.5 2h-7a2.5 2.5 0 00-2.32 1.58z" fill={primaryFill} /><path d="M6 6a.5.5 0 000 1h4a.5.5 0 100-1H6z" fill={primaryFill} /><path d="M6 9a.5.5 0 000 1h2.61a.5.5 0 000-1H6z" fill={primaryFill} /></svg>;
};

export default Channel16Regular;