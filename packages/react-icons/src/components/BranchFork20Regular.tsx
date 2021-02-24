import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BranchFork20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 5a3 3 0 10-3.5 2.96v4.08a3 3 0 101 0V11H12a2.5 2.5 0 002.5-2.5v-.54a3 3 0 10-1 0v.54c0 .83-.67 1.5-1.5 1.5H6.5V7.96A3 3 0 009 5zM6 7a2 2 0 110-4 2 2 0 010 4zm0 10a2 2 0 110-4 2 2 0 010 4zM16 5a2 2 0 11-4 0 2 2 0 014 0z" fill={primaryFill} /></svg>;
};

export default BranchFork20Regular;