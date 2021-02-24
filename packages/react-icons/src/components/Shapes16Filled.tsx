import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Shapes16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 5.5A4.5 4.5 0 019.97 5H8.5A3.5 3.5 0 005 8.5v1.47A4.5 4.5 0 011 5.5z" fill={primaryFill} /><path d="M8.5 6A2.5 2.5 0 006 8.5v4A2.5 2.5 0 008.5 15h4a2.5 2.5 0 002.5-2.5v-4A2.5 2.5 0 0012.5 6h-4z" fill={primaryFill} /></svg>;
};

export default Shapes16Filled;