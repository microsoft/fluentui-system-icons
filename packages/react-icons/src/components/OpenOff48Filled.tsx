import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const OpenOff48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.38 4.62a1.25 1.25 0 10-1.76 1.76l4.7 4.7A7.48 7.48 0 007 16.5v17.25a7.5 7.5 0 007.5 7.5h17c2.2 0 4.17-.94 5.54-2.44l4.58 4.57a1.25 1.25 0 001.76-1.76l-37-37zm28.53 32.06a4.49 4.49 0 01-3.41 1.57h-17a4.5 4.5 0 01-4.5-4.5V16.5c0-1.3.55-2.47 1.44-3.3l10.62 10.62-.62.62a1.5 1.5 0 102.12 2.12l.62-.62L34.9 36.68z" fill={primaryFill} /><path d="M25.6 20.29l2.11 2.12L39 11.12v9.38a1.5 1.5 0 003 0v-13c0-.83-.67-1.5-1.5-1.5h-13a1.5 1.5 0 000 3h9.38L25.59 20.29z" fill={primaryFill} /><path d="M39 26.5v7.2l-3-3v-4.2a1.5 1.5 0 113 0z" fill={primaryFill} /><path d="M14.3 9l3 3h4.2a1.5 1.5 0 000-3h-7.2z" fill={primaryFill} /></svg>;
};

export default OpenOff48Filled;