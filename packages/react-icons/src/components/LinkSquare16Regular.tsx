import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const LinkSquare16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 2a2 2 0 00-2 2v4c0 1.1.9 2 2 2h1V9H4a1 1 0 01-1-1V4a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1v1a2 2 0 002-2V4a2 2 0 00-2-2H4z" fill={primaryFill} /><path d="M11 6v1h1a1 1 0 011 1v4a1 1 0 01-1 1H8a1 1 0 01-1-1V8a1 1 0 011-1V6a2 2 0 00-2 2v4c0 1.1.9 2 2 2h4a2 2 0 002-2V8a2 2 0 00-2-2h-1z" fill={primaryFill} /></svg>;
};

export default LinkSquare16Regular;