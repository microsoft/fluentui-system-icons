import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ShapeSubtract16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 2.27A2 2 0 002 4v5a2.03 2.03 0 00.38 1.18A2 2 0 004 11h1v1c0 1.1.9 2 2 2h5a2 2 0 002-2V7a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H4a2 2 0 00-1 .27zM6 7a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 01-1 1H7a1 1 0 01-1-1V7z" fill={primaryFill} /></svg>;
};

export default ShapeSubtract16Filled;