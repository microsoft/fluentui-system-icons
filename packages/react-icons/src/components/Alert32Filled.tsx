import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Alert32Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 13a9 9 0 0118 0v3.8l1.93 4.83A1 1 0 0126 23H6a1 1 0 01-.93-1.37L7 16.8V13zm5.12 12a3.99 3.99 0 007.76 0h-7.76z" fill={primaryFill} /></svg>;
};

export default Alert32Filled;