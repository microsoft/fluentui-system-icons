import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PhoneLaptop24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.25 8C9.22 8 10 8.8 10 9.75v9.5c0 .97-.78 1.75-1.75 1.75h-4.5C2.78 21 2 20.22 2 19.25v-9.5C2 8.8 2.78 8 3.75 8h4.5zm0 1.5h-4.5a.25.25 0 00-.25.25v9.5c0 .14.11.25.25.25h4.5c.14 0 .25-.1.25-.25v-9.5a.25.25 0 00-.25-.25zm-2 7.5a.75.75 0 01.1 1.5h-.6a.75.75 0 01-.1-1.5h.6zm15-.5a.75.75 0 01.1 1.5H11v-1.5h10.25zm-3-11.5c.97 0 1.75.78 1.75 1.75v7.5c0 .97-.78 1.75-1.75 1.75H11v-1.5h7.25c.14 0 .25-.11.25-.25v-7.5a.25.25 0 00-.25-.25H5.75a.25.25 0 00-.25.25V7H4v-.25C4 5.78 4.78 5 5.75 5h12.5z" fill={primaryFill} /></svg>;
};

export default PhoneLaptop24Regular;