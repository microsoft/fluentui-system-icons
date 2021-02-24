import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ShapeSubtract24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 2.9c-.62.6-1 1.43-1 2.35v8a3.3 3.3 0 00.56 1.82 3.25 3.25 0 002.69 1.43H7.5v2.25c0 1.8 1.46 3.25 3.25 3.25h8c1.8 0 3.25-1.46 3.25-3.25v-8c0-1.8-1.46-3.25-3.25-3.25H16.5V5.25c0-1.8-1.46-3.25-3.25-3.25h-8c-.87 0-1.67.34-2.25.9zm6 7.85C9 9.78 9.78 9 10.75 9h8c.97 0 1.75.78 1.75 1.75v8c0 .97-.78 1.75-1.75 1.75h-8c-.97 0-1.75-.78-1.75-1.75v-8z" fill={primaryFill} /></svg>;
};

export default ShapeSubtract24Filled;