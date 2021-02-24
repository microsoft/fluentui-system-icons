import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowHookDownRight28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.78 8.02A7.06 7.06 0 0112 6h7a1 1 0 110 2h-7c-1.76 0-2.99.6-3.78 1.41A4.42 4.42 0 007 12.5c0 1.14.41 2.26 1.22 3.09.8.81 2.02 1.41 3.78 1.41h7.59l-3.3-3.3a1 1 0 111.42-1.4l5 5a1 1 0 010 1.4l-5 5a1 1 0 01-1.42-1.4l3.3-3.3H12a7.06 7.06 0 01-5.22-2.02A6.42 6.42 0 015 12.5c0-1.61.59-3.24 1.78-4.48z" fill={primaryFill} /></svg>;
};

export default ArrowHookDownRight28Filled;