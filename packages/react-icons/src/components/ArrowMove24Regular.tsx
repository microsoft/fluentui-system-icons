import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowMove24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.28 6.03c-.3.3-.77.3-1.06 0l-1.47-1.47v3.69a.75.75 0 01-1.5 0V4.56L9.78 6.03a.75.75 0 01-1.06-1.06l2.75-2.75a.75.75 0 011.06 0l2.75 2.75c.3.3.3.77 0 1.06z" fill={primaryFill} /><path d="M6.03 14.22a.75.75 0 11-1.06 1.06l-2.75-2.75a.75.75 0 010-1.06l2.75-2.75a.75.75 0 011.06 1.06l-1.47 1.47h3.69a.75.75 0 010 1.5H4.56l1.47 1.47z" fill={primaryFill} /><path d="M17.97 15.28a.75.75 0 010-1.06l1.47-1.47h-3.69a.75.75 0 010-1.5h3.69l-1.47-1.47a.75.75 0 011.06-1.06l2.75 2.75a.75.75 0 010 1.06l-2.75 2.75c-.3.3-.77.3-1.06 0z" fill={primaryFill} /><path d="M15.28 17.97a.75.75 0 00-1.06 0l-1.47 1.47v-3.69a.75.75 0 00-1.5 0v3.69l-1.47-1.47a.75.75 0 00-1.06 1.06l2.75 2.75a.75.75 0 001.06 0l2.75-2.75c.3-.3.3-.77 0-1.06z" fill={primaryFill} /></svg>;
};

export default ArrowMove24Regular;