import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CommentMultiple20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 2a2.5 2.5 0 00-2.46 2.03C4.2 4 4.34 4 4.5 4h8A3.5 3.5 0 0116 7.5v5.45a2.5 2.5 0 002-2.45V6a4 4 0 00-4-4H6.5z" fill={primaryFill} /><path d="M4.5 5A2.5 2.5 0 002 7.5v6A2.5 2.5 0 004.5 16H5v1.03a1 1 0 001.58.81L9.16 16h3.34a2.5 2.5 0 002.5-2.5v-6A2.5 2.5 0 0012.5 5h-8z" fill={primaryFill} /></svg>;
};

export default CommentMultiple20Filled;