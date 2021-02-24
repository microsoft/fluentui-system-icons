import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BorderRight24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 5a1 1 0 100-2h-2a1 1 0 100 2h2z" fill={primaryFill} /><path d="M5 11a1 1 0 10-2 0v2a1 1 0 102 0v-2z" fill={primaryFill} /><path d="M14 20a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1z" fill={primaryFill} /><path d="M6 3a1 1 0 010 2 1 1 0 00-1 1 1 1 0 01-2 0 3 3 0 013-3z" fill={primaryFill} /><path d="M7 20a1 1 0 01-1 1 3 3 0 01-3-3 1 1 0 112 0 1 1 0 001 1 1 1 0 011 1z" fill={primaryFill} /><path d="M18 21a1 1 0 110-2 1 1 0 001-1V6a1 1 0 00-1-1 1 1 0 110-2 3 3 0 013 3v12a3 3 0 01-3 3z" fill={primaryFill} /></svg>;
};

export default BorderRight24Filled;