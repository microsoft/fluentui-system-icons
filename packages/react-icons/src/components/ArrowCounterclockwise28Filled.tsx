import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowCounterclockwise28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.34 7a9 9 0 11-3.3 6.1 1 1 0 00-1.99-.2A11 11 0 107 5.51V4a1 1 0 00-2 0v3.99A1 1 0 006 9h4a1 1 0 100-2H8.34z" fill={primaryFill} /></svg>;
};

export default ArrowCounterclockwise28Filled;