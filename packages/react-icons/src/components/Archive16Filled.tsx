import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Archive16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 3a1 1 0 011-1h10a1 1 0 011 1v1a1 1 0 01-1 1H3a1 1 0 01-1-1V3z" fill={primaryFill} /><path d="M3 6v6c0 1.1.9 2 2 2h6a2 2 0 002-2V6H3zm4 1h2a.5.5 0 010 1H7a.5.5 0 010-1z" fill={primaryFill} /></svg>;
};

export default Archive16Filled;