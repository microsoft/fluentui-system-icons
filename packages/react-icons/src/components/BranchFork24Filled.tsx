import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BranchFork24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 5.5a3.5 3.5 0 01-3 3.46v2.54h6.25c1.24 0 2.25-1 2.25-2.25v-.4a3.5 3.5 0 111.5.11v.29A3.75 3.75 0 0114.25 13H8v2.04a3.5 3.5 0 11-1.5.1V8.86A3.5 3.5 0 1111 5.5z" fill={primaryFill} /></svg>;
};

export default BranchFork24Filled;