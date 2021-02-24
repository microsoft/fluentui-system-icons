import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Battery424Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 6a3 3 0 013 3v1h1a1 1 0 011 1v2a1 1 0 01-1 1h-1v1a3 3 0 01-3 3H5a3 3 0 01-3-3V9a3 3 0 013-3h12zm-7 3H6a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 00-1-1z" fill={primaryFill} /></svg>;
};

export default Battery424Filled;