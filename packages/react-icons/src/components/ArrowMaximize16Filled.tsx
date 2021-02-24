import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowMaximize16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.48 2a.75.75 0 000 1.5h2.96L3.5 11.44V8.48a.75.75 0 00-1.5 0v4.67c0 .47.38.85.85.85h4.67a.75.75 0 000-1.5H4.56l7.94-7.94v2.96a.75.75 0 001.5 0V2.85a.85.85 0 00-.85-.85H8.48z" fill={primaryFill} /></svg>;
};

export default ArrowMaximize16Filled;