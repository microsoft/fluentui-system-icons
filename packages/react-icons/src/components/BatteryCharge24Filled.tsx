import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BatteryCharge24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.75 6H17a3 3 0 013 2.82V10l1 .02a1 1 0 011 .88v2.12a1 1 0 01-.87.99H21L20 14v1a3 3 0 01-2.82 3H8a.75.75 0 01-.75-.65v-4.6c0-.38.28-.7.64-.74L8 12h.63c.72 0 1.3-.55 1.37-1.24l.01-.14V6.75c0-.38.28-.7.65-.74l.1-.01H17h-6.25zm-4.1-2h.1c.38 0 .69.28.74.65V6h.76c.42 0 .75.34.75.75v2.5C9 10.22 8.22 11 7.25 11h-1v6.24c0 .38-.28.7-.65.75h-.1a.75.75 0 01-.74-.64V11H3.74C2.78 11 2 10.22 2 9.25v-2.5c0-.41.34-.75.75-.75h.75V4.75c0-.38.28-.7.65-.74l.1-.01c.38 0 .7.28.74.65l.01.1V6h1V4.75c0-.38.28-.7.65-.74l.1-.01h-.1z" fill={primaryFill} /></svg>;
};

export default BatteryCharge24Filled;