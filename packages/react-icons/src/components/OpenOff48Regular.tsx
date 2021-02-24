import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const OpenOff48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.38 4.62a1.25 1.25 0 10-1.76 1.76l4.62 4.63A7.23 7.23 0 007 16.25V34c0 4 3.25 7.25 7.25 7.25h17.5c2.12 0 4.04-.91 5.36-2.37l4.5 4.5a1.25 1.25 0 001.77-1.76l-37-37zM35.34 37.1a4.74 4.74 0 01-3.59 1.64h-17.5A4.75 4.75 0 019.5 34V16.25c0-1.37.58-2.6 1.5-3.47L22.24 24l-.86.87a1.25 1.25 0 101.76 1.76l.87-.86L35.34 37.1z" fill={primaryFill} /><path d="M25.77 20.46l1.77 1.77L39.5 10.27v10.48a1.25 1.25 0 002.5 0V7.25C42 6.56 41.44 6 40.75 6h-13.5a1.25 1.25 0 100 2.5h10.48L25.77 20.46z" fill={primaryFill} /><path d="M39 26.5v7.2l-2.5-2.5v-4.7a1.25 1.25 0 112.5 0z" fill={primaryFill} /><path d="M14.3 9l2.5 2.5h4.95a1.25 1.25 0 000-2.5H14.3z" fill={primaryFill} /></svg>;
};

export default OpenOff48Regular;