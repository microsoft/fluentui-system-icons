import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ErrorCircle12Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 8.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z" fill={primaryFill} /><path d="M5.5 3.41a.5.5 0 011 0V6.09a.5.5 0 01-1 0V3.41z" fill={primaryFill} /><path d="M11 6A5 5 0 111 6a5 5 0 0110 0zm-1 0a4 4 0 10-8 0 4 4 0 008 0z" fill={primaryFill} /></svg>;
};

export default ErrorCircle12Regular;