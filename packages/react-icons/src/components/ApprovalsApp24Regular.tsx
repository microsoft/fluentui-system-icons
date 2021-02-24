import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ApprovalsApp24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.78 1.72a.75.75 0 10-1.06 1.06L11.94 4a9 9 0 109.02 9.82.75.75 0 00-1.5-.13 7.5 7.5 0 11-7.52-8.19l-1.22 1.22a.75.75 0 001.06 1.06l2.5-2.5a.75.75 0 000-1.06l-2.5-2.5z" fill={primaryFill} /><path d="M15.78 10.22c.3.3.3.77 0 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-2-2a.75.75 0 011.06-1.06l1.47 1.47 3.97-3.97c.3-.3.77-.3 1.06 0z" fill={primaryFill} /></svg>;
};

export default ApprovalsApp24Regular;