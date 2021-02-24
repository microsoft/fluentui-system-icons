import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Vault24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill={primaryFill} /><path d="M2 7.75A3.75 3.75 0 015.75 4h12.5A3.75 3.75 0 0122 7.75v8.5A3.75 3.75 0 0118.25 20H5.75A3.75 3.75 0 012 16.25v-8.5zM5.75 7a.75.75 0 00-.75.75v8.5a.75.75 0 001.5 0v-8.5A.75.75 0 005.75 7zm5.53 1.22a.75.75 0 10-1.06 1.06l1.2 1.2a2.99 2.99 0 000 3.04l-1.2 1.2a.75.75 0 101.06 1.06l1.2-1.2a2.99 2.99 0 003.04 0l1.2 1.2a.75.75 0 101.06-1.06l-1.2-1.2a2.99 2.99 0 000-3.04l1.2-1.2a.75.75 0 00-1.06-1.06l-1.2 1.2a2.99 2.99 0 00-3.04 0l-1.2-1.2z" fill={primaryFill} /></svg>;
};

export default Vault24Filled;