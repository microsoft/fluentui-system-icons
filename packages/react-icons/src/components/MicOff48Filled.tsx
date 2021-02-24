import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MicOff48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 17.77V24a8 8 0 0012.7 6.47l2.36 2.36a11.5 11.5 0 01-18.56-9.08 1.25 1.25 0 10-2.5 0 14 14 0 0012.5 13.92v5.08a1.25 1.25 0 102.5 0v-5.04c2.96-.2 5.67-1.34 7.84-3.1l8.78 8.77a1.25 1.25 0 101.76-1.76l-37-37a1.25 1.25 0 00-1.76 1.76L16 17.77z" fill={primaryFill} /><path d="M34.26 28.95l1.84 1.85c1.2-2.07 1.9-4.48 1.9-7.05a1.25 1.25 0 10-2.5 0c0 1.87-.45 3.64-1.24 5.2z" fill={primaryFill} /><path d="M16.1 10.79l15.55 15.56A8 8 0 0032 24V12a8 8 0 00-15.9-1.21z" fill={primaryFill} /></svg>;
};

export default MicOff48Filled;