import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BranchFork20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 5a3 3 0 01-2.5 2.96V10H12c.83 0 1.5-.67 1.5-1.5v-.54a3 3 0 111 0v.54A2.5 2.5 0 0112 11H6.5v1.04a3 3 0 11-1 0V7.96A3 3 0 119 5z" fill={primaryFill} /></svg>;
};

export default BranchFork20Filled;