import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const HomeAdd24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M23 6.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zM18 7v2.5a.5.5 0 11-1 0V7h-2.5a.5.5 0 010-1H17V3.5a.5.5 0 011 0V6h2.5a.5.5 0 110 1H18z" fill={primaryFill} /><path d="M19.5 19.75v-7.06a6.47 6.47 0 001.5-.71v7.77c0 .96-.78 1.75-1.75 1.75h-3.5c-.97 0-1.75-.79-1.75-1.75v-5.5a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25v5.5c0 .96-.78 1.75-1.75 1.75h-3.5C3.78 21.5 3 20.7 3 19.75v-9.8c0-.67.3-1.3.8-1.73l6.75-5.69a2.25 2.25 0 012.15-.42c-.4.44-.73.93-1 1.46a.75.75 0 00-.18.1l-6.75 5.7a.75.75 0 00-.27.57v9.8c0 .15.11.26.25.26h3.5c.14 0 .25-.11.25-.25v-5.5c0-.97.78-1.75 1.75-1.75h3.5c.97 0 1.75.78 1.75 1.75v5.5c0 .14.11.25.25.25h3.5c.14 0 .25-.11.25-.25z" fill={primaryFill} /></svg>;
};

export default HomeAdd24Regular;