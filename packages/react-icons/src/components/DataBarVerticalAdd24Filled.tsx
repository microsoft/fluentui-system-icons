import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DataBarVerticalAdd24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.5 4.75a2.75 2.75 0 10-5.5 0v14.5a2.75 2.75 0 003.67 2.6 6.48 6.48 0 011.83-10.12V4.75z" fill={primaryFill} /><path d="M21.5 12.38a6.47 6.47 0 00-5.5-1.2V9.74a2.75 2.75 0 015.5 0v2.63z" fill={primaryFill} /><path d="M4.75 12a2.75 2.75 0 012.75 2.75v4.5a2.75 2.75 0 01-5.5 0v-4.5A2.75 2.75 0 014.75 12z" fill={primaryFill} /><path d="M23 17.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-5 .5v2.5a.5.5 0 11-1 0V18h-2.5a.5.5 0 010-1H17v-2.5a.5.5 0 111 0V17h2.5a.5.5 0 110 1H18z" fill={primaryFill} /></svg>;
};

export default DataBarVerticalAdd24Filled;