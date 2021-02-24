import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const HatGraduation24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 17.75v-3.77l4.06 2.66a5.37 5.37 0 005.88 0L19 13.98v3.77c0 .16-.05.32-.15.45l-.01.02-.02.01v.02a3.4 3.4 0 01-.41.43c-.28.27-.7.61-1.25.96A9.7 9.7 0 0112 21a9.7 9.7 0 01-5.16-1.36 7.43 7.43 0 01-1.68-1.42v-.01a.76.76 0 01-.16-.46z" fill={primaryFill} /><path d="M22.16 10.13l-8.04 5.25a3.87 3.87 0 01-4.24 0L3 10.88v5.37a.75.75 0 01-1.5 0V10c0-.09.02-.17.04-.25a.75.75 0 01.3-.88L9.92 3.7a3.87 3.87 0 014.18 0l8.06 5.17a.75.75 0 01.01 1.26z" fill={primaryFill} /></svg>;
};

export default HatGraduation24Filled;