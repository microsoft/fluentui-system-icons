import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ShieldKeyhole24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5.75V11c0 5 2.96 8.68 8.73 10.95.17.07.37.07.54 0C18.04 19.68 21 16 21 11V5.75a.75.75 0 00-.75-.75c-2.66 0-5.26-.94-7.8-2.85a.75.75 0 00-.9 0C9.01 4.05 6.41 5 3.75 5a.75.75 0 00-.75.75zM14 11a2 2 0 01-1.25 1.85v2.4a.75.75 0 01-1.5 0v-2.4A2 2 0 1114 11z" fill={primaryFill} /></svg>;
};

export default ShieldKeyhole24Filled;