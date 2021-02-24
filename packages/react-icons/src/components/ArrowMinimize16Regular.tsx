import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowMinimize16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.85 2.85a.5.5 0 00-.7-.7L10 5.29V3.5a.5.5 0 00-1 0v2.9c0 .33.27.6.6.6h2.9a.5.5 0 000-1h-1.8l3.15-3.15z" fill={primaryFill} /><path d="M6.5 13a.5.5 0 01-.5-.5v-1.8l-3.15 3.15a.5.5 0 01-.7-.7L5.29 10H3.5a.5.5 0 010-1h2.9c.33 0 .6.27.6.6v2.9a.5.5 0 01-.5.5z" fill={primaryFill} /></svg>;
};

export default ArrowMinimize16Regular;