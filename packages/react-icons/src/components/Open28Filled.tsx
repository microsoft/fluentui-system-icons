import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Open28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.75 4.25a1 1 0 011-1h8a1 1 0 011 1v8a1 1 0 11-2 0V6.66l-9.04 9.05a1 1 0 01-1.42-1.42l9.05-9.04h-5.59a1 1 0 01-1-1z" fill={primaryFill} /><path d="M9.25 7a3 3 0 00-3 3v9a3 3 0 003 3H18a3 3 0 003-3v-3a1 1 0 112 0v3a5 5 0 01-5 5H9.25a5 5 0 01-5-5v-9a5 5 0 015-5H12a1 1 0 110 2H9.25z" fill={primaryFill} /></svg>;
};

export default Open28Filled;