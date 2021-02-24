import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Tv24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.75 4A2.75 2.75 0 002 6.75v8.5A2.75 2.75 0 004.75 18h14.5A2.75 2.75 0 0022 15.25v-8.5A2.75 2.75 0 0019.25 4H4.75z" fill={primaryFill} /><path d="M5 20.25c0-.41.34-.75.75-.75h12.5a.75.75 0 010 1.5H5.75a.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
};

export default Tv24Filled;