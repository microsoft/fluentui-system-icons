import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ChevronDown24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.3 8.3a1 1 0 011.4 0l6.3 6.29 6.3-6.3a1 1 0 111.4 1.42l-7 7a1 1 0 01-1.4 0l-7-7a1 1 0 010-1.42z" fill={primaryFill} /></svg>;
};

export default ChevronDown24Filled;