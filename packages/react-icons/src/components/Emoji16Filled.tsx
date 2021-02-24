import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Emoji16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 14A6 6 0 118 2a6 6 0 010 12zM6.25 7.75a.75.75 0 100-1.5.75.75 0 000 1.5zm-.11 1.92a.5.5 0 10-.75.66 3.5 3.5 0 005.22 0 .5.5 0 10-.75-.66 2.5 2.5 0 01-3.72 0zm3.61-1.92a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /></svg>;
};

export default Emoji16Filled;