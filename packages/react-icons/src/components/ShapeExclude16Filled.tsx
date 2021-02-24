import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ShapeExclude16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 2.27A2 2 0 002 4v5c0 1.1.9 2 2 2h1v1c0 1.1.9 2 2 2h5a2 2 0 002-2V7a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H4a2 2 0 00-1 .27zM11 5v4a2 2 0 01-2 2H5V7c0-1.1.9-2 2-2h4z" fill={primaryFill} /></svg>;
};

export default ShapeExclude16Filled;