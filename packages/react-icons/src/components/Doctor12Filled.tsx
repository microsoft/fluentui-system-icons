import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Doctor12Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 2a1 1 0 00-1 1v1H3a1 1 0 00-1 1v2a1 1 0 001 1h1v1a1 1 0 001 1h2a1 1 0 001-1V8h1a1 1 0 001-1V5a1 1 0 00-1-1H8V3a1 1 0 00-1-1H5z" fill={primaryFill} /></svg>;
};

export default Doctor12Filled;