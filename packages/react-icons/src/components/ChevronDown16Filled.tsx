import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ChevronDown16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.2 5.74a.75.75 0 011.06-.04L8 9.23l3.74-3.53a.75.75 0 111.02 1.1l-4.25 4a.75.75 0 01-1.02 0l-4.25-4a.75.75 0 01-.04-1.06z" fill={primaryFill} /></svg>;
};

export default ChevronDown16Filled;