import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Blur20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2a8 8 0 105.3 14H10v1a7 7 0 110-14h3.88A7.96 7.96 0 0010 2z" fill={primaryFill} /><path d="M10 4h5.3c.34.3.66.64.95 1H10V4z" fill={primaryFill} /><path d="M16.93 6H10v1h7.42c-.14-.35-.3-.68-.49-1z" fill={primaryFill} /><path d="M10 8h7.75c.08.33.15.66.19 1H10V8z" fill={primaryFill} /><path d="M18 10h-8v1h7.94c.04-.33.06-.66.06-1z" fill={primaryFill} /><path d="M10 12h7.75c-.09.34-.2.68-.33 1H10v-1z" fill={primaryFill} /><path d="M16.93 14H10v1h6.25a8 8 0 00.68-1z" fill={primaryFill} /></svg>;
};

export default Blur20Regular;