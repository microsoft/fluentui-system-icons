import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowCircleUp16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 8a7 7 0 1114 0A7 7 0 011 8zm6.8-3.46a.5.5 0 00-.15.1l-2.5 2.5a.5.5 0 10.7.71L7.5 6.21V11a.5.5 0 001 0V6.2l1.65 1.65a.5.5 0 00.7-.7l-2.5-2.5a.5.5 0 00-.54-.11z" fill={primaryFill} /></svg>;
};

export default ArrowCircleUp16Filled;