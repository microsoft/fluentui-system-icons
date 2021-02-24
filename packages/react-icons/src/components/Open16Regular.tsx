import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Open16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 3a.5.5 0 010-1h5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V3.7L7.85 8.86a.5.5 0 11-.7-.7L12.29 3H8.5z" fill={primaryFill} /><path d="M2 6a3 3 0 013-3h2a.5.5 0 010 1H5a2 2 0 00-2 2v5c0 1.1.9 2 2 2h5a2 2 0 002-2V9.5a.5.5 0 011 0V11a3 3 0 01-3 3H5a3 3 0 01-3-3V6z" fill={primaryFill} /></svg>;
};

export default Open16Regular;