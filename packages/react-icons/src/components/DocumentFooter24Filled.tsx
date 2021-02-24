import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DocumentFooter24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 15.75c0-.14.11-.25.25-.25h6.5c.14 0 .25.11.25.25v1.5c0 .14-.11.25-.25.25h-6.5a.25.25 0 01-.25-.25v-1.5z" fill={primaryFill} /><path d="M19.99 4.1A2.25 2.25 0 0017.74 2H6.1A2.25 2.25 0 004 4.25v15.5l.01.15A2.25 2.25 0 006.24 22h11.5l.16-.01a2.25 2.25 0 002.1-2.25V4.24l-.01-.15zM8.75 14h6.5c.97 0 1.75.78 1.75 1.75v1.5c0 .97-.78 1.75-1.75 1.75h-6.5C7.78 19 7 18.22 7 17.25v-1.5c0-.97.78-1.75 1.75-1.75z" fill={primaryFill} /></svg>;
};

export default DocumentFooter24Filled;