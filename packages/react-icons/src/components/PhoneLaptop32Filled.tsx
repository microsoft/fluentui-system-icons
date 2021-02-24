import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PhoneLaptop32Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 8a3 3 0 013-3h16a3 3 0 013 3v10a3 3 0 01-3 3h-8v-8a5 5 0 00-5-5H7a4 4 0 00-1 .13V8zm23 17H17v-2h12a1 1 0 110 2zM6 10a3 3 0 00-3 3v12a3 3 0 003 3h6a3 3 0 003-3V13a3 3 0 00-3-3H6zm3 15a1 1 0 110-2 1 1 0 010 2z" fill={primaryFill} /></svg>;
};

export default PhoneLaptop32Filled;