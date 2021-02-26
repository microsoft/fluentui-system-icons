import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const KeyboardShift16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.18 1.57a1.51 1.51 0 00-2.36 0l-4.6 5.8A1 1 0 003 9h1.98v4a1 1 0 001 1.01h4.02a1 1 0 001-1V9H13a1 1 0 00.8-1.63l-4.6-5.8z" fill={primaryFill} /></svg>;
};

export default KeyboardShift16Filled;