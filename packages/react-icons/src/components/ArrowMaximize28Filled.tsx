import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowMaximize28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.5 3H24a1 1 0 011 .88v7.62a1 1 0 01-2 .12V6.4L6.41 23h5.09a1 1 0 011 .88V24a1 1 0 01-.88 1H4a1 1 0 01-1-.88V16.5a1 1 0 012-.12v5.21L21.59 5H16.5a1 1 0 01-1-.88V4a1 1 0 01.88-1H24h-7.5z" fill={primaryFill} /></svg>;
};

export default ArrowMaximize28Filled;