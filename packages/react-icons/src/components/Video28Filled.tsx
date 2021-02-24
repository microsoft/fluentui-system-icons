import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Video28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 5.5A3.25 3.25 0 002 8.75v10.5c0 1.8 1.46 3.25 3.25 3.25h9.5c1.8 0 3.25-1.46 3.25-3.25V8.75c0-1.8-1.46-3.25-3.25-3.25h-9.5z" fill={primaryFill} /><path d="M23.12 20.64L19.5 17.1V11l3.61-3.62a1.25 1.25 0 012.14.88v11.5c0 1.1-1.34 1.67-2.13.9z" fill={primaryFill} /></svg>;
};

export default Video28Filled;