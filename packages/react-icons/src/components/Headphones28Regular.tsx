import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Headphones28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22 26h-3a1 1 0 01-1-.88V17a1 1 0 01.88-1h5.62v-2a10.5 10.5 0 10-21 0v2H9a1 1 0 011 1v8a1 1 0 01-1 1H6a4 4 0 01-4-4v-8a12 12 0 1124 0v8a4 4 0 01-3.8 4H19h3zM8.5 17.5h-5V22A2.5 2.5 0 006 24.5h2.5v-7zm16 0h-5v7H22a2.5 2.5 0 002.5-2.5v-4.5z" fill={primaryFill} /></svg>;
};

export default Headphones28Regular;