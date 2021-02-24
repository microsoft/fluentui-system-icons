import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ResizeSmall16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 3C3.67 3 3 3.67 3 4.5v1a.5.5 0 01-1 0v-1A2.5 2.5 0 014.5 2h1a.5.5 0 010 1h-1z" fill={primaryFill} /><path d="M7.5 6C6.67 6 6 6.67 6 7.5v1c0 .83.67 1.5 1.5 1.5h1c.83 0 1.5-.67 1.5-1.5v-1C10 6.67 9.33 6 8.5 6h-1z" fill={primaryFill} /><path d="M11.5 3c.83 0 1.5.67 1.5 1.5v1a.5.5 0 001 0v-1A2.5 2.5 0 0011.5 2h-1a.5.5 0 000 1h1z" fill={primaryFill} /><path d="M11.5 13c.83 0 1.5-.67 1.5-1.5v-1a.5.5 0 011 0v1a2.5 2.5 0 01-2.5 2.5h-1a.5.5 0 010-1h1z" fill={primaryFill} /><path d="M4.5 13A1.5 1.5 0 013 11.5v-1.25a.5.5 0 00-1 0v1.25A2.5 2.5 0 004.5 14h1.25a.5.5 0 000-1H4.5z" fill={primaryFill} /></svg>;
};

export default ResizeSmall16Filled;