import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CommentOff28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l.85.85A3.74 3.74 0 002 6.75v10.5A3.75 3.75 0 005.75 21H7v3.3a1.75 1.75 0 002.77 1.41L16.31 21h3.63l4.78 4.78a.75.75 0 001.06-1.06L3.28 2.22z" fill={primaryFill} /><path d="M6.18 3l17.65 17.65a3.75 3.75 0 002.17-3.4V6.75A3.75 3.75 0 0022.25 3H6.18z" fill={primaryFill} /></svg>;
};

export default CommentOff28Filled;