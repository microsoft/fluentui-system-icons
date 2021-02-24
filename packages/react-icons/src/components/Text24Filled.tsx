import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Text24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.75 5a1 1 0 011-1h12.5a1 1 0 011 1v2a1 1 0 11-2 0V6H13v12h1a1 1 0 110 2h-4a1 1 0 110-2h1V6H6.75v1a1 1 0 01-2 0V5z" fill={primaryFill} /></svg>;
};

export default Text24Filled;