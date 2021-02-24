import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ChevronRight28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.54 4.3a1 1 0 011.42 0l8.75 8.74a1 1 0 010 1.42l-8.75 8.75a1 1 0 01-1.42-1.42l8.05-8.04-8.05-8.04a1 1 0 010-1.42z" fill={primaryFill} /></svg>;
};

export default ChevronRight28Filled;