import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Rename20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 2a.5.5 0 000 1h1v14h-1a.5.5 0 000 1h3a.5.5 0 000-1h-1V3h1a.5.5 0 000-1h-3z" fill={primaryFill} /><path d="M4.5 4h4v12h-4A2.5 2.5 0 012 13.5v-7A2.5 2.5 0 014.5 4z" fill={primaryFill} /><path d="M15.5 16h-4V4h4A2.5 2.5 0 0118 6.5v7a2.5 2.5 0 01-2.5 2.5z" fill={primaryFill} /></svg>;
};

export default Rename20Filled;