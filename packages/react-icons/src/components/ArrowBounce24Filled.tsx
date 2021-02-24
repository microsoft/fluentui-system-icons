import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowBounce24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 7a1 1 0 00-1-1H3a1 1 0 00-1 1v7a1 1 0 102 0V9.41l8.04 8.05a1 1 0 001.42 0L21.7 9.2a1 1 0 00-1.42-1.42l-7.54 7.55L5.41 8H10a1 1 0 001-1z" fill={primaryFill} /></svg>;
};

export default ArrowBounce24Filled;