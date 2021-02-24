import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Location48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M39.01 28.98A17 17 0 1011 31.96l.02.02.02.02H11l10.09 10.7a4 4 0 005.82 0L37 32h-.04l.02-.02a16.76 16.76 0 002.03-3zm-15-1.48a6 6 0 110-12 6 6 0 010 12z" fill={primaryFill} /></svg>;
};

export default Location48Filled;