import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CircleHalfFill20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.54 9.25h12.92a6.5 6.5 0 00-12.92 0zM2 10a8 8 0 1116 0 8 8 0 01-16 0z" fill={primaryFill} /></svg>;
};

export default CircleHalfFill20Filled;