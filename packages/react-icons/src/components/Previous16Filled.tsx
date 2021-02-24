import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Previous16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.75 13.04a1 1 0 01-1.58.81L5.04 8.82a1 1 0 010-1.64l7.13-5.03a1 1 0 011.58.82v10.07z" fill={primaryFill} /><path d="M1.75 13.25a.75.75 0 001.5 0V2.75a.75.75 0 00-1.5 0v10.5z" fill={primaryFill} /></svg>;
};

export default Previous16Filled;