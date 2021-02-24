import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextColumnTwo24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" fill={primaryFill} /><path d="M3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" fill={primaryFill} /><path d="M3 14a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" fill={primaryFill} /><path d="M3 18a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" fill={primaryFill} /><path d="M13 6a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" fill={primaryFill} /><path d="M13 10a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" fill={primaryFill} /><path d="M13 14a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" fill={primaryFill} /><path d="M13 18a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" fill={primaryFill} /></svg>;
};

export default TextColumnTwo24Filled;