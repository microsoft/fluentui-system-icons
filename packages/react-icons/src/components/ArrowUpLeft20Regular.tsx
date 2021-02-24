import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowUpLeft20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 4a.5.5 0 000-1h-8a.5.5 0 00-.5.5v8a.5.5 0 001 0V4.7l12.15 12.15a.5.5 0 00.7-.7L4.71 4h6.79z" fill={primaryFill} /></svg>;
};

export default ArrowUpLeft20Regular;