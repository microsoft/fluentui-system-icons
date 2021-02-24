import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PersonMail24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 15.5c0-.56.19-1.08.5-1.5H5.25C4.01 14 3 15 3 16.25v.92c0 .57.18 1.13.51 1.6C5.06 20.92 7.58 22 11 22h.05a2.51 2.51 0 01-.05-.5v-6z" fill={primaryFill} /><path d="M11 2a5 5 0 110 10 5 5 0 010-10z" fill={primaryFill} /><path d="M17.51 18.93l-5.5-3.2A2 2 0 0114 14h7a2 2 0 012 1.97l-5.49 2.96z" fill={primaryFill} /><path d="M17.74 19.94L23 17.11V21a2 2 0 01-2 2h-7a2 2 0 01-2-2v-4.13l5.25 3.06c.15.09.33.1.49.01z" fill={primaryFill} /></svg>;
};

export default PersonMail24Filled;