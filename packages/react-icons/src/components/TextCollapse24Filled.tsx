import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextCollapse24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 4a1 1 0 001 1h14a1 1 0 100-2H7a1 1 0 00-1 1z" fill={primaryFill} /><path d="M13 9a1 1 0 001 1h7a1 1 0 100-2h-7a1 1 0 00-1 1z" fill={primaryFill} /><path d="M7 18h14a1 1 0 110 2H7a1 1 0 110-2z" fill={primaryFill} /><path d="M13 14a1 1 0 001 1h7a1 1 0 100-2h-7a1 1 0 00-1 1z" fill={primaryFill} /><path d="M11 11.5a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0zm-2 0a.5.5 0 01-.5.5h-4a.5.5 0 010-1h4c.28 0 .5.22.5.5z" fill={primaryFill} /></svg>;
};

export default TextCollapse24Filled;