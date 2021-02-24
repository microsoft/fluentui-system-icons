import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Key32Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22 12a2 2 0 100-4 2 2 0 000 4zm-7 12v-1h2a1 1 0 001-1v-2h2a8 8 0 10-7.68-5.74L4.6 22A2 2 0 004 23.41V26c0 1.1.9 2 2 2h4a2 2 0 002-2v-1h2a1 1 0 001-1zm-1-12a6 6 0 116 6h-3a1 1 0 00-1 1v2h-2a1 1 0 00-1 1v1h-2a1 1 0 00-1 1v2H6v-2.59l8.18-8.17a1 1 0 00.22-1.07c-.26-.67-.4-1.4-.4-2.17z" fill={primaryFill} /></svg>;
};

export default Key32Regular;