import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BackpackAdd28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 2a5 5 0 00-4.94 4.2A9.75 9.75 0 004 14.75v7.5A3.75 3.75 0 007.75 26h7.65c-.48-.44-.9-.95-1.25-1.5h-6.4c-1.24 0-2.25-1-2.25-2.25V17.5H9v1.75a.75.75 0 001.5 0V17.5h3.12c.24-.54.53-1.04.88-1.5h-9v-1.25c0-4.56 3.7-8.25 8.25-8.25h.5c4.04 0 7.4 2.9 8.11 6.73.56.15 1.1.35 1.6.61a9.75 9.75 0 00-5.02-7.64A5 5 0 0014 2zm-.25 3c-1 0-1.97.15-2.88.43a3.5 3.5 0 016.26 0A9.75 9.75 0 0014.25 5h-.5z" fill={primaryFill} /><path d="M16.76 14c.6-.35 1.26-.62 1.95-.79.18-.27.29-.6.29-.96C19 10.45 17.54 9 15.75 9h-3.5A3.25 3.25 0 009 12.25c0 .97.78 1.75 1.75 1.75h6zm-4.51-3.5h3.5c.97 0 1.75.78 1.75 1.75 0 .14-.11.25-.25.25h-6.5a.25.25 0 01-.25-.25c0-.97.78-1.75 1.75-1.75z" fill={primaryFill} /><path d="M27 20.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0zm-6-4a.5.5 0 00-1 0V20h-3.5a.5.5 0 000 1H20v3.5a.5.5 0 001 0V21h3.5a.5.5 0 000-1H21v-3.5z" fill={primaryFill} /></svg>;
};

export default BackpackAdd28Regular;