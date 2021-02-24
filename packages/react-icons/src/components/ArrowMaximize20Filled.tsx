import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowMaximize20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 3a1 1 0 011 1v5.25a.75.75 0 01-1.5 0v-3.7L5.56 15.5h3.69a.75.75 0 010 1.5H4a1 1 0 01-1-1v-5.25a.75.75 0 011.5 0v3.69l9.94-9.94h-3.69a.75.75 0 010-1.5H16z" fill={primaryFill} /></svg>;
};

export default ArrowMaximize20Filled;