import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowUp28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.21 12.73a.75.75 0 101.08 1.04l7.96-8.27v18.75a.75.75 0 101.5 0V5.5l7.96 8.27a.75.75 0 001.08-1.04L14.72 3.3a1 1 0 00-1.44 0l-9.07 9.43z" fill={primaryFill} /></svg>;
};

export default ArrowUp28Regular;