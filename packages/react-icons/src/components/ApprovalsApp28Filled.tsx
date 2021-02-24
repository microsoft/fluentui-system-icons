import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ApprovalsApp28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.3 2.3a1 1 0 011.4 0l3.01 3a1 1 0 010 1.41l-3 3a1 1 0 11-1.42-1.42l1.29-1.28a8.5 8.5 0 108.9 8.94 1 1 0 112 .1A10.5 10.5 0 1113.6 5.02l-1.3-1.3a1 1 0 010-1.42z" fill={primaryFill} /><path d="M18.2 12.3a1 1 0 010 1.4l-5 5a1 1 0 01-1.4 0l-2-2a1 1 0 111.4-1.4l1.3 1.29 4.3-4.3a1 1 0 011.4 0z" fill={primaryFill} /></svg>;
};

export default ApprovalsApp28Filled;