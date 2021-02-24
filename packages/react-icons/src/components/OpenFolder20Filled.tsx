import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const OpenFolder20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6.25C3 4.45 4.46 3 6.25 3H14c1.8 0 3.25 1.46 3.25 3.25v2a.75.75 0 01-1.5 0v-2c0-.97-.78-1.75-1.75-1.75H6.25c-.97 0-1.75.78-1.75 1.75v7.5c0 .97.78 1.75 1.75 1.75h4a.75.75 0 010 1.5h-4A3.25 3.25 0 013 13.75v-7.5z" fill={primaryFill} /><path d="M8 8.75c0-.41.34-.75.75-.75h4.5a.75.75 0 010 1.5h-2.69l5.22 5.22a.75.75 0 11-1.06 1.06L9.5 10.56v2.69a.75.75 0 01-1.5 0v-4.5z" fill={primaryFill} /></svg>;
};

export default OpenFolder20Filled;