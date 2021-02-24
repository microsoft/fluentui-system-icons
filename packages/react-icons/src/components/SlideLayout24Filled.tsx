import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SlideLayout24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 8.75c0-.14.11-.25.25-.25h10.5c.14 0 .25.11.25.25v1.75h-11V8.75z" fill={primaryFill} /><path d="M6.5 12v3.25c0 .14.11.25.25.25H9V12H6.5z" fill={primaryFill} /><path d="M17.25 15.5H10.5V12h7v3.25c0 .14-.11.25-.25.25z" fill={primaryFill} /><path d="M2 6.75A2.75 2.75 0 014.75 4h14.5A2.75 2.75 0 0122 6.75v10.5A2.75 2.75 0 0119.25 20H4.75A2.75 2.75 0 012 17.25V6.75zM6.75 7C5.78 7 5 7.78 5 8.75v6.5c0 .97.78 1.75 1.75 1.75h10.5c.97 0 1.75-.78 1.75-1.75v-6.5C19 7.78 18.22 7 17.25 7H6.75z" fill={primaryFill} /></svg>;
};

export default SlideLayout24Filled;