import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Battery924Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 9a1 1 0 00-1 1v4a1 1 0 001 1h9a1 1 0 001-1v-4a1 1 0 00-1-1H6zM2 9a3 3 0 013-3h12.5a3 3 0 013 3v1h.5a1 1 0 011 1v2a1 1 0 01-1 1h-.5v1a3 3 0 01-3 3H5a3 3 0 01-3-3V9z" fill={primaryFill} /></svg>;
};

export default Battery924Filled;