import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Headphones28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M26 22a4 4 0 01-4 4h-3a1 1 0 01-1-1v-8a1 1 0 011-1h5v-2a10 10 0 00-20 0v2h5a1 1 0 011 1v8a1 1 0 01-1 1H6a4 4 0 01-4-4v-8a12 12 0 1124 0v8z" fill={primaryFill} /></svg>;
};

export default Headphones28Filled;