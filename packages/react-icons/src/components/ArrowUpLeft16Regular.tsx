import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowUpLeft16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 3a.5.5 0 000-1h-6a.5.5 0 00-.5.5v6a.5.5 0 001 0V3.7l10.15 10.15a.5.5 0 00.7-.7L3.71 3H8.5z" fill={primaryFill} /></svg>;
};

export default ArrowUpLeft16Regular;