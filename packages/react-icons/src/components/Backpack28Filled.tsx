import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Backpack28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 12.25c0-.97.78-1.75 1.75-1.75h3.5c.97 0 1.75.78 1.75 1.75 0 .14-.11.25-.25.25h-6.5a.25.25 0 01-.25-.25z" fill={primaryFill} /><path d="M14 2a5.25 5.25 0 00-5.19 4.45A10 10 0 004 15v1h20v-1a10 10 0 00-4.81-8.55A5.25 5.25 0 0014 2zm0 3c-.91 0-1.8.12-2.64.35a3.25 3.25 0 015.28 0C15.8 5.12 14.9 5 14 5zm-1.75 4h3.5c1.8 0 3.25 1.46 3.25 3.25 0 .97-.78 1.75-1.75 1.75h-6.5C9.78 14 9 13.22 9 12.25 9 10.45 10.46 9 12.25 9z" fill={primaryFill} /><path d="M9 19.25V17.5H4V22a4 4 0 004 4h12a4 4 0 004-4v-4.5H10.5v1.75a.75.75 0 01-1.5 0z" fill={primaryFill} /></svg>;
};

export default Backpack28Filled;