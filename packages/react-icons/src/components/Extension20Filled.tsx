import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Extension20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 2a2 2 0 012 2v.06h3a1 1 0 011 1V8h-1a2 2 0 00-2 1.85V10a2 2 0 001.85 2H17v3.06a1 1 0 01-1 1h-3v.09a2 2 0 01-4-.1H6a1 1 0 01-1-1V12a2 2 0 110-4V5.06a1 1 0 011-1h3V4c0-1.1.9-2 2-2z" fill={primaryFill} /></svg>;
};

export default Extension20Filled;