import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Megaphone16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 3.5c0-1.02-1-1.75-1.98-1.42l-11 3.72A1.5 1.5 0 001 7.22v1.56c0 .65.4 1.22 1.02 1.42l1.98.68V12a3 3 0 005.87.87l3.15 1.07A1.5 1.5 0 0015 12.5v-9zM5 11.22l3.92 1.33A2 2 0 015 12v-.78z" fill={primaryFill} /></svg>;
};

export default Megaphone16Filled;