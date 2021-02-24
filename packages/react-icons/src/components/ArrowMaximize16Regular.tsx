import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowMaximize16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 2a.5.5 0 000 1h3.8L3 12.3V8.5a.5.5 0 00-1 0v4.9c0 .33.27.6.6.6h4.9a.5.5 0 000-1H3.7L13 3.7v3.8a.5.5 0 001 0V2.6a.6.6 0 00-.6-.6H8.5z" fill={primaryFill} /></svg>;
};

export default ArrowMaximize16Regular;