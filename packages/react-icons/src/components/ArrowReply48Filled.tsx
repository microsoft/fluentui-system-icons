import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowReply48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.22 23l6.21 6.2a1.75 1.75 0 01-2.35 2.6l-.13-.12-9.19-9.2a1.75 1.75 0 01-.11-2.34l.11-.13 9.2-9.19a1.75 1.75 0 012.58 2.35l-.11.13-6.2 6.2H22c3.34 0 6.45.74 9.16 2.17l.4.22c2.76 1.54 5 3.79 6.55 6.55A19.42 19.42 0 0140.5 38a1.75 1.75 0 11-3.5 0c0-2.92-.67-5.59-1.94-7.85a13.51 13.51 0 00-5.21-5.21A15.78 15.78 0 0022.48 23L22 23h-7.78l6.21 6.2-6.2-6.2z" fill={primaryFill} /></svg>;
};

export default ArrowReply48Filled;