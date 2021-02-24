import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const VehicleBus24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.75 5a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5z" fill={primaryFill} /><path d="M4 5.75A3.75 3.75 0 017.75 2h8.5A3.75 3.75 0 0120 5.75V9.5h1.23a.75.75 0 010 1.5H20v8.75c0 .97-.78 1.75-1.75 1.75h-1.5c-.97 0-1.75-.78-1.75-1.75V18.5H9v1.25c0 .97-.78 1.75-1.75 1.75h-1.5c-.97 0-1.75-.78-1.75-1.75V11H2.75a.75.75 0 010-1.5H4V5.75zM16.5 18.5v1.25c0 .14.11.25.25.25h1.5c.14 0 .25-.11.25-.25V18.5h-2zm-11 0v1.25c0 .14.11.25.25.25h1.5c.14 0 .25-.11.25-.25V18.5h-2zm2.25-15c-1.24 0-2.25 1-2.25 2.25V12h13V5.75c0-1.24-1-2.25-2.25-2.25h-8.5zM9 15a1 1 0 10-2 0 1 1 0 002 0zm7 1a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /></svg>;
};

export default VehicleBus24Filled;