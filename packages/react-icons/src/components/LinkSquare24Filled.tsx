import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const LinkSquare24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 3A3.5 3.5 0 003 6.5v6A3.5 3.5 0 006.5 16H7v-2h-.5A1.5 1.5 0 015 12.5v-6C5 5.67 5.67 5 6.5 5h6c.83 0 1.5.67 1.5 1.5v6c0 .83-.67 1.5-1.5 1.5H11v2h1.5a3.5 3.5 0 003.5-3.5v-6A3.5 3.5 0 0012.5 3h-6z" fill={primaryFill} /><path d="M10 11.5c0-.83.67-1.5 1.5-1.5H13V8h-1.5A3.5 3.5 0 008 11.5v6a3.5 3.5 0 003.5 3.5h6a3.5 3.5 0 003.5-3.5v-6A3.5 3.5 0 0017.5 8H17v2h.5c.83 0 1.5.67 1.5 1.5v6c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5v-6z" fill={primaryFill} /></svg>;
};

export default LinkSquare24Filled;