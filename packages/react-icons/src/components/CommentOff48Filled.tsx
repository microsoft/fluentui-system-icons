import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CommentOff48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M34.23 36l7.64 7.63a1.25 1.25 0 001.76-1.76L6.13 4.37a1.25 1.25 0 10-1.76 1.76l1.87 1.88A7.23 7.23 0 004 13.25v15.5c0 4 3.25 7.25 7.25 7.25H12v5.82a2.25 2.25 0 003.55 1.84L26.4 36h7.83z" fill={primaryFill} /><path d="M11.3 6l29.05 29.05a7.25 7.25 0 003.65-6.3v-15.5c0-4-3.25-7.25-7.25-7.25H11.3z" fill={primaryFill} /></svg>;
};

export default CommentOff48Filled;