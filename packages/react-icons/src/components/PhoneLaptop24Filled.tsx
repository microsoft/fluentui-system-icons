import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PhoneLaptop24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.25 8C9.22 8 10 8.8 10 9.75v9.5c0 .97-.78 1.75-1.75 1.75h-4.5C2.78 21 2 20.22 2 19.25v-9.5C2 8.8 2.78 8 3.75 8h4.5zm-2 9.5h-.5a.75.75 0 100 1.5h.5a.75.75 0 000-1.5zm15-1a.75.75 0 01.1 1.5H11v-1.5h10.25zm-3-11.5c.97 0 1.75.78 1.75 1.75v7.5c0 .97-.78 1.75-1.75 1.75H11V9a2 2 0 00-1.85-2H4v-.25C4 5.78 4.78 5 5.75 5h12.5z" fill={primaryFill} /></svg>;
};

export default PhoneLaptop24Filled;