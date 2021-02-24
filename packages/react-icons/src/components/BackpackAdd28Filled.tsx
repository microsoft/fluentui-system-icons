import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BackpackAdd28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.81 6.45a5.25 5.25 0 0110.38 0 10 10 0 014.74 7.38 7.47 7.47 0 00-5.22-.62c.18-.27.29-.6.29-.96C19 10.45 17.54 9 15.75 9h-3.5A3.25 3.25 0 009 12.25c0 .97.78 1.75 1.75 1.75h6c-.87.5-1.64 1.2-2.25 2H4v-1a10 10 0 014.81-8.55zm7.83-1.1a3.25 3.25 0 00-5.28 0 10.01 10.01 0 015.28 0z" fill={primaryFill} /><path d="M13 20.5c0-1.07.22-2.08.62-3H10.5v1.75a.75.75 0 01-1.5 0V17.5H4V22a4 4 0 004 4h7.4a7.48 7.48 0 01-2.4-5.5z" fill={primaryFill} /><path d="M12.25 10.5c-.97 0-1.75.78-1.75 1.75 0 .14.11.25.25.25h6.5c.14 0 .25-.11.25-.25 0-.97-.78-1.75-1.75-1.75h-3.5z" fill={primaryFill} /><path d="M27 20.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0zm-6-4a.5.5 0 00-1 0V20h-3.5a.5.5 0 000 1H20v3.5a.5.5 0 001 0V21h3.5a.5.5 0 000-1H21v-3.5z" fill={primaryFill} /></svg>;
};

export default BackpackAdd28Filled;