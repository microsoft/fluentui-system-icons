import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowMinimize16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.78 3.28a.75.75 0 00-1.06-1.06L10.5 4.44V3.25a.75.75 0 00-1.5 0V6.2a.75.75 0 00.8.8H12.75a.75.75 0 000-1.5h-1.19l2.22-2.22z" fill={primaryFill} /><path d="M6.25 13.5a.75.75 0 01-.75-.75v-1.19l-2.22 2.22a.75.75 0 01-1.06-1.06l2.22-2.22H3.25a.75.75 0 010-1.5H6.2a.75.75 0 01.8.8V12.75c0 .41-.34.75-.75.75z" fill={primaryFill} /></svg>;
};

export default ArrowMinimize16Filled;