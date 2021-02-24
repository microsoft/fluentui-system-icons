import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Channel16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.5 4.55a1 1 0 00-1 1 1 1 0 101-1z" fill={primaryFill} /><path d="M2.5 3.55c-.11 0-.22.01-.32.03A2.5 2.5 0 014.5 2h7A2.5 2.5 0 0114 4.5v7a2.5 2.5 0 01-2.5 2.5h-7A2.5 2.5 0 012 11.5V7.49a2 2 0 10.5-3.94zm3 2.95c0 .28.22.5.5.5h4a.5.5 0 100-1H6a.5.5 0 00-.5.5zm0 3c0 .28.22.5.5.5h2.61a.5.5 0 000-1H6a.5.5 0 00-.5.5z" fill={primaryFill} /></svg>;
};

export default Channel16Filled;