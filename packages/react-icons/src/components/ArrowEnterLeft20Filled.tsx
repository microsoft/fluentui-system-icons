import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowEnterLeft20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.64 12.5l2.87 2.7a.75.75 0 01-1.02 1.1l-4.25-4a.75.75 0 010-1.1l4.25-4A.75.75 0 117.5 8.3L4.64 11h10.11c.97 0 1.75-.78 1.75-1.75v-4.5a.75.75 0 011.5 0v4.5c0 1.8-1.46 3.25-3.25 3.25H4.65z" fill={primaryFill} /></svg>;
};

export default ArrowEnterLeft20Filled;