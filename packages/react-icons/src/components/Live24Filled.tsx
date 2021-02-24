import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Live24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.34 4.94a1 1 0 010 1.41 8 8 0 000 11.32 1 1 0 11-1.41 1.41 10 10 0 010-14.14 1 1 0 011.41 0zm12.73 0a10 10 0 010 14.14 1 1 0 01-1.41-1.41 8 8 0 000-11.32 1 1 0 011.41-1.41zM9.31 7.8a1 1 0 010 1.42 3.92 3.92 0 000 5.54 1 1 0 11-1.41 1.41 5.92 5.92 0 010-8.37 1 1 0 011.4 0zm6.96 0a5.92 5.92 0 010 8.37 1 1 0 01-1.42-1.41 3.92 3.92 0 000-5.54 1 1 0 011.42-1.42zm-4.19 2.77a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" fill={primaryFill} /></svg>;
};

export default Live24Filled;