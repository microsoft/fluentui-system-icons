import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const OpenFolder16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 5a3 3 0 013-3h6a3 3 0 013 3v2.5a.5.5 0 01-1 0V5a2 2 0 00-2-2H5a2 2 0 00-2 2v6c0 1.1.9 2 2 2h3.5a.5.5 0 010 1H5a3 3 0 01-3-3V5z" fill={primaryFill} /><path d="M6.5 6a.5.5 0 00-.5.5v4a.5.5 0 001 0V7.7l5.15 5.15a.5.5 0 00.7-.7L7.71 7h2.79a.5.5 0 000-1h-4z" fill={primaryFill} /></svg>;
};

export default OpenFolder16Regular;