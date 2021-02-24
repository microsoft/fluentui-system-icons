import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ErrorCircle12Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 11A5 5 0 106 1a5 5 0 000 10zm-.75-2.75a.75.75 0 111.5 0 .75.75 0 01-1.5 0zm.26-4.84a.5.5 0 01.98 0l.01.09v2.59a.5.5 0 01-1 0V3.41z" fill={primaryFill} /></svg>;
};

export default ErrorCircle12Filled;