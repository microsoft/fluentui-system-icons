import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ChevronDown12Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.22 4.47c.3-.3.77-.3 1.06 0L6 7.19l2.72-2.72a.75.75 0 011.06 1.06L6.53 8.78c-.3.3-.77.3-1.06 0L2.22 5.53a.75.75 0 010-1.06z" fill={primaryFill} /></svg>;
};

export default ChevronDown12Filled;