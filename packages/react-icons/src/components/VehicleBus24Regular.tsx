import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const VehicleBus24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 16a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M17 15a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M10.75 5a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5z" fill={primaryFill} /><path d="M7.75 2A3.75 3.75 0 004 5.75V9.5H2.75a.75.75 0 100 1.5H4v8.75c0 .97.78 1.75 1.75 1.75h1.5c.97 0 1.75-.78 1.75-1.75V18.5h6v1.25c0 .97.78 1.75 1.75 1.75h1.5c.97 0 1.75-.78 1.75-1.75V11h1.23a.75.75 0 000-1.5H20V5.75A3.75 3.75 0 0016.25 2h-8.5zM18.5 18.5v1.25c0 .14-.11.25-.25.25h-1.5a.25.25 0 01-.25-.25V18.5h2zm0-1.5h-13v-4h13v4zm-13 2.75V18.5h2v1.25c0 .14-.11.25-.25.25h-1.5a.25.25 0 01-.25-.25zm0-14c0-1.24 1-2.25 2.25-2.25h8.5c1.24 0 2.25 1 2.25 2.25v5.75h-13V5.75z" fill={primaryFill} /></svg>;
};

export default VehicleBus24Regular;