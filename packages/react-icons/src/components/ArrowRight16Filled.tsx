import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowRight16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 8c0-.41.34-.75.75-.75h8.79L8.25 4.31a.75.75 0 011-1.12L14 7.44a.75.75 0 010 1.12L9.25 12.8a.75.75 0 11-1-1.12l3.29-2.94H2.75A.75.75 0 012 8z" fill={primaryFill} /></svg>;
};

export default ArrowRight16Filled;