import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Multiplier1X32Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.5 10.25a1.25 1.25 0 00-2.16-.85l-.51.56c-.23.26-.42.48-.7.75-.42.4-1 .86-2.02 1.47a1.25 1.25 0 101.28 2.14c.66-.4 1.18-.75 1.61-1.08v8.51a1.25 1.25 0 102.5 0v-11.5zm4.63 6.12a1.25 1.25 0 00-1.76 1.76l1.36 1.37-1.36 1.37a1.25 1.25 0 001.76 1.76l1.37-1.36 1.37 1.36a1.25 1.25 0 001.76-1.76l-1.36-1.37 1.36-1.37a1.25 1.25 0 00-1.76-1.76l-1.37 1.36-1.37-1.36z" fill={primaryFill} /></svg>;
};

export default Multiplier1X32Filled;