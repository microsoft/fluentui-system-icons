import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowHookDownRight16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.88 5.1A3.4 3.4 0 017.5 4h3a.5.5 0 010 1h-3a2.4 2.4 0 00-1.88.77A2.6 2.6 0 005 7.5c0 .64.22 1.27.62 1.73.4.45 1.02.77 1.88.77h3.8l-1.15-1.15a.5.5 0 11.7-.7l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 01-.7-.7L11.29 11H7.5a3.4 3.4 0 01-2.62-1.1A3.6 3.6 0 014 7.5c0-.86.28-1.73.88-2.4z" fill={primaryFill} /></svg>;
};

export default ArrowHookDownRight16Regular;