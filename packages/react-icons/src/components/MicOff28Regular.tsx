import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MicOff28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.5 10.56L2.22 3.28a.75.75 0 111.06-1.06l22.5 22.5a.75.75 0 01-1.06 1.06l-5.35-5.35a7.97 7.97 0 01-4.62 2.04v2.78a.75.75 0 01-1.5 0v-2.78A8 8 0 016 14.5v-.75a.75.75 0 011.5 0v.75a6.5 6.5 0 0010.8 4.87l-1.41-1.42A4.5 4.5 0 019.5 14.5v-3.94zm6.32 6.32L11 12.06v2.44a3 3 0 004.82 2.38z" fill={primaryFill} /><path d="M9.5 6.32l1.5 1.5V6.5a3 3 0 116 0v7.32l1.44 1.44c.04-.25.06-.5.06-.76v-8a4.5 4.5 0 00-9-.18z" fill={primaryFill} /><path d="M20.05 16.87l1.14 1.14c.52-1.06.81-2.25.81-3.51v-.75a.75.75 0 10-1.5 0v.75c0 .84-.16 1.64-.45 2.37z" fill={primaryFill} /></svg>;
};

export default MicOff28Regular;