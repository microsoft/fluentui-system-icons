import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Accessibility32Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 2a4 4 0 100 8 4 4 0 000-8zm12.02 6.29a2.84 2.84 0 00-3.58-1.5l-1.78.67a1 1 0 00-.6.61 6.4 6.4 0 01-12.12 0 1 1 0 00-.6-.6L7.6 6.8a2.81 2.81 0 00-2.11 5.22L10 14.02v5.8l-2.42 6.43a2.6 2.6 0 004.8 1.96l3.04-6.92a.57.57 0 011.06.01l2.87 6.87a2.7 2.7 0 005.02-1.98L22 19.83v-5.81l4.55-1.96a2.84 2.84 0 001.47-3.77z" fill={primaryFill} /></svg>;
};

export default Accessibility32Filled;