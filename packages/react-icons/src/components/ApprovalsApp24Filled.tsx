import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ApprovalsApp24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.54 1.8a1 1 0 011.42 0l2.5 2.5a1 1 0 010 1.4l-2.5 2.5a1 1 0 11-1.42-1.4l.76-.77a7 7 0 107.65 7.85 1 1 0 111.98.24 9 9 0 11-9.57-10.1l-.82-.81a1 1 0 010-1.42z" fill={primaryFill} /><path d="M16.2 9.8a1 1 0 010 1.4l-4.5 4.5a1 1 0 01-1.4 0l-2-2a1 1 0 111.4-1.4l1.3 1.29 3.8-3.8a1 1 0 011.4 0z" fill={primaryFill} /></svg>;
};

export default ApprovalsApp24Filled;