import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const LeafOne24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.24 3.27a1.75 1.75 0 00-2.48 0l-3.7 3.71a7 7 0 004.19 11.91v2.36a.75.75 0 001.5 0v-2.36A7 7 0 0016.95 7l-3.71-3.72zm-.49 14.11v-5.63a.75.75 0 00-1.5 0v5.63a5.5 5.5 0 01-3.14-9.34l3.71-3.7c.1-.1.26-.1.36 0l3.7 3.7a5.5 5.5 0 01-3.13 9.34z" fill={primaryFill} /></svg>;
};

export default LeafOne24Regular;