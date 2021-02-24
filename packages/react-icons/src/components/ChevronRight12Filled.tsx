import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ChevronRight12Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.47 2.22c-.3.3-.3.77 0 1.06L7.19 6 4.47 8.72a.75.75 0 001.06 1.06l3.25-3.25c.3-.3.3-.77 0-1.06L5.53 2.22a.75.75 0 00-1.06 0z" fill={primaryFill} /></svg>;
};

export default ChevronRight12Filled;