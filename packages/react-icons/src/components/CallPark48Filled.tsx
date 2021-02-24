import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CallPark48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.54 12.49C4.38 7.13 9.08 3.75 14 3.75h.15a5.25 5.25 0 014.96 3.52l1.57 4.48c.77 2.2 0 4.65-1.9 6.01l-2.77 1.98c-.81.58-1.02 1.34-.8 1.9 1.01 2.45 3.3 5.76 5.17 7.68.45.46 1.22.62 2.07.31l2.95-1.08a5.25 5.25 0 015.86 1.58l2.41 2.92c1.4 1.7 1.58 4.1.43 5.99-2.64 4.31-8.15 6.45-12.64 3.37A39.98 39.98 0 019.42 29.38a35.8 35.8 0 01-4.88-16.9z" fill={primaryFill} /><path d="M29.25 4C28.56 4 28 4.56 28 5.25v17.5a1.25 1.25 0 102.5 0V16.5h5.25a6.25 6.25 0 000-12.5h-6.5zm6.5 10H30.5V6.5h5.25a3.75 3.75 0 010 7.5z" fill={primaryFill} /></svg>;
};

export default CallPark48Filled;