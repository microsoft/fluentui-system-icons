import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Shapes16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 2A3.5 3.5 0 005 8.96v1.01A4.5 4.5 0 119.97 5h-1A3.5 3.5 0 005.5 2z" fill={primaryFill} /><path d="M8.5 6A2.5 2.5 0 006 8.5v4A2.5 2.5 0 008.5 15h4a2.5 2.5 0 002.5-2.5v-4A2.5 2.5 0 0012.5 6h-4zM7 8.5C7 7.67 7.67 7 8.5 7h4c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-4A1.5 1.5 0 017 12.5v-4z" fill={primaryFill} /></svg>;
};

export default Shapes16Regular;