import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowDown28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M23.8 15.27a.75.75 0 10-1.09-1.04l-7.96 8.27V3.75a.75.75 0 00-1.5 0V22.5L5.3 14.23a.75.75 0 00-1.08 1.04l9.07 9.42a1 1 0 001.44 0l9.07-9.42z" fill={primaryFill} /></svg>;
};

export default ArrowDown28Regular;