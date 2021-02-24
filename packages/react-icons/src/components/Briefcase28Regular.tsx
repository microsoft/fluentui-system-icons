import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Briefcase28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.75 3a.75.75 0 00-.75.75V8H6.75A3.75 3.75 0 003 11.75v8.5A3.75 3.75 0 006.75 24h14.5A3.75 3.75 0 0025 20.25v-8.5A3.75 3.75 0 0021.25 8H19V3.75a.75.75 0 00-.75-.75h-8.5zm7.75 5h-7V4.5h7V8zm-13 3.75c0-1.24 1-2.25 2.25-2.25h14.5c1.24 0 2.25 1 2.25 2.25v8.5c0 1.24-1 2.25-2.25 2.25H6.75c-1.24 0-2.25-1-2.25-2.25v-8.5z" fill={primaryFill} /></svg>;
};

export default Briefcase28Regular;