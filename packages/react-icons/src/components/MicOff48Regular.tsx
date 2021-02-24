import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MicOff48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 17.77L4.62 6.38a1.25 1.25 0 111.76-1.76l37 37a1.25 1.25 0 01-1.76 1.76l-8.78-8.77A13.94 13.94 0 0125 37.7v5.04a1.25 1.25 0 11-2.5 0v-5.08A14 14 0 0110 23.75a1.25 1.25 0 112.5 0 11.5 11.5 0 0018.56 9.08l-2.36-2.36A8 8 0 0116 24v-6.23zm10.9 10.9l-8.4-8.4V24a5.5 5.5 0 008.4 4.67z" fill={primaryFill} /><path d="M29.5 24v.2l2.15 2.15A8 8 0 0032 24V12a8 8 0 00-15.9-1.21l2.4 2.4V12a5.5 5.5 0 1111 0v12z" fill={primaryFill} /><path d="M34.26 28.95l1.84 1.85c1.2-2.07 1.9-4.48 1.9-7.05a1.25 1.25 0 10-2.5 0c0 1.87-.45 3.64-1.24 5.2z" fill={primaryFill} /></svg>;
};

export default MicOff48Regular;