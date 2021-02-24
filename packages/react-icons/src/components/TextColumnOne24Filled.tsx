import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextColumnOne24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 6a1 1 0 011-1h12a1 1 0 110 2H6a1 1 0 01-1-1z" fill={primaryFill} /><path d="M5 10a1 1 0 011-1h12a1 1 0 110 2H6a1 1 0 01-1-1z" fill={primaryFill} /><path d="M5 14a1 1 0 011-1h12a1 1 0 110 2H6a1 1 0 01-1-1z" fill={primaryFill} /><path d="M5 18a1 1 0 011-1h12a1 1 0 110 2H6a1 1 0 01-1-1z" fill={primaryFill} /></svg>;
};

export default TextColumnOne24Filled;