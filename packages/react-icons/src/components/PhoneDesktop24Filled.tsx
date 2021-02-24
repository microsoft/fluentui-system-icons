import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PhoneDesktop24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.25 9c.97 0 1.75.78 1.75 1.75v9.5c0 .97-.78 1.75-1.75 1.75h-4.5C2.78 22 2 21.22 2 20.25v-9.5C2 9.78 2.78 9 3.75 9h4.5zm-2 9.5h-.6a.75.75 0 000 1.49h.7a.75.75 0 000-1.49h-.1zM19.75 2c1.2 0 2.17.93 2.24 2.1l.01.15v9c0 1.2-.93 2.17-2.1 2.24l-.15.01H16v2h1.25a.75.75 0 01.1 1.5H11v-1.5h3.5v-2H11v-5A2.5 2.5 0 008.66 8H4V4.25c0-1.2.93-2.17 2.1-2.24L6.25 2h13.5z" fill={primaryFill} /></svg>;
};

export default PhoneDesktop24Filled;