import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BranchFork16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 5.95a2.5 2.5 0 10-1 0v4.1a2.5 2.5 0 101 0V9h4.5A2.5 2.5 0 0012 6.5v-.55a2.5 2.5 0 10-1 0v.55c0 .83-.67 1.5-1.5 1.5H5V5.95zM4.5 5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm7 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM6 12.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill={primaryFill} /></svg>;
};

export default BranchFork16Regular;