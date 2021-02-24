import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowReply24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.7 16.3a1 1 0 11-1.41 1.4l-5-5a1 1 0 010-1.4l5-5A1 1 0 019.7 7.7L6.41 11H13a8 8 0 018 7.75V19a1 1 0 11-2 0 6 6 0 00-5.78-6H6.41l3.3 3.3z" fill={primaryFill} /></svg>;
};

export default ArrowReply24Filled;