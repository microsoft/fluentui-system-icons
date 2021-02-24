import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ErrorCircle20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2a8 8 0 110 16 8 8 0 010-16zm0 10.5a.75.75 0 100 1.5.75.75 0 000-1.5zM10 6a.5.5 0 00-.5.41v4.68a.5.5 0 001 0V6.41A.5.5 0 0010 6z" fill={primaryFill} /></svg>;
};

export default ErrorCircle20Filled;