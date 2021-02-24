import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const LockClosed12Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 4V3a2 2 0 114 0v1h1a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1h1zm1-1v1h2V3a1 1 0 00-2 0z" fill={primaryFill} /></svg>;
};

export default LockClosed12Filled;