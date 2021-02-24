import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Food24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 3a1 1 0 011 .88V20a1 1 0 01-2 .12V15h-1a1 1 0 01-1-.88V8c0-2.2 1.5-5 3-5zm-6 0a1 1 0 011 .88V9a4 4 0 01-3 3.87V20a1 1 0 01-2 .12v-7.25a4 4 0 01-3-3.66V4a1 1 0 012-.12V9a2 2 0 001 1.73V4a1 1 0 012-.12V10.73a2 2 0 001-1.56V4a1 1 0 011-1z" fill={primaryFill} /></svg>;
};

export default Food24Filled;