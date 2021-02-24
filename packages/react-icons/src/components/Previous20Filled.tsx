import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Previous20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.75 16.25a.75.75 0 001.5 0V3.75a.75.75 0 00-1.5 0v12.5z" fill={primaryFill} /><path d="M16.75 15.6c0 1-1.11 1.6-1.94 1.04l-8.4-5.6a1.25 1.25 0 010-2.08l8.4-5.6c.83-.55 1.94.04 1.94 1.04v11.2z" fill={primaryFill} /></svg>;
};

export default Previous20Filled;