import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BatteryCharge24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.75 6H17a3 3 0 013 2.82V10l1 .02a1 1 0 011 .88v2.12a1 1 0 01-.87.99H21L20 14v1a3 3 0 01-2.82 3H8a.75.75 0 01-.1-1.5H17c.78 0 1.42-.6 1.5-1.36V9c0-.78-.6-1.42-1.36-1.5h-6.39a.75.75 0 01-.1-1.5H17h-6.25zm-4.5 5v6.25a.75.75 0 01-1.5.1V11h-1C2.78 11 2 10.22 2 9.25v-2.5c0-.41.34-.75.75-.75h.75V4.75c0-.38.28-.7.65-.74l.1-.01c.38 0 .7.28.74.65l.01.1V6h1V4.75c0-.38.28-.7.65-.74l.1-.01c.38 0 .69.28.74.65V6h.76c.42 0 .75.34.75.75v2.5C9 10.22 8.22 11 7.25 11h-1v6.25V11zM7.5 7.5h-4v1.75c0 .14.11.25.25.25h3.5c.14 0 .25-.11.25-.25V7.5z" fill={primaryFill} /></svg>;
};

export default BatteryCharge24Regular;