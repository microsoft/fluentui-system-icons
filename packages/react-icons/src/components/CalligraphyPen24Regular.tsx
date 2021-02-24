import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CalligraphyPen24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 2.75a.75.75 0 00-1.5 0v3c0 .9.67 1.64 1.54 1.74l-1.01 2.5c-.41 1-.37 2.19.12 3.15l3.99 7.95c.28.56.8.91 1.36.91s1.08-.35 1.36-.91l4-7.95c.48-.96.52-2.14.11-3.15l-1.01-2.5c.87-.1 1.54-.84 1.54-1.74v-3a.75.75 0 00-1.5 0v3c0 .14-.11.25-.25.25h-8.5a.25.25 0 01-.25-.25v-3zm7.34 4.75l1.24 3.06c.25.6.22 1.33-.07 1.9l-3.26 6.5V12.3a1.5 1.5 0 10-1.5 0v6.67l-3.26-6.5a2.37 2.37 0 01-.07-1.91L9.16 7.5h5.68z" fill={primaryFill} /></svg>;
};

export default CalligraphyPen24Regular;