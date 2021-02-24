import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ErrorCircle16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 2a6 6 0 110 12A6 6 0 018 2zm0 8a.75.75 0 100 1.5.75.75 0 000-1.5zm0-5.5a.5.5 0 00-.5.41V8.59a.5.5 0 001 0V4.91A.5.5 0 008 4.5z" fill={primaryFill} /></svg>;
};

export default ErrorCircle16Filled;