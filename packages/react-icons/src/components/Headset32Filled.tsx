import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Headset32Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 12a10 10 0 0120 0v6a4 4 0 01-4 4h-2a2 2 0 01-2-2v-6c0-1.1.9-2 2-2h4a8 8 0 10-16 0h4a2 2 0 012 2v6a2 2 0 01-2 2H8a4 4 0 004 4h1.17a3 3 0 110 2H12a6 6 0 01-6-6V12z" fill={primaryFill} /></svg>;
};

export default Headset32Filled;