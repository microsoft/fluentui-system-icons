import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowHookUpLeft20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 15.25c0 .41.34.75.75.75h4.5a4.4 4.4 0 003.53-1.59A5.24 5.24 0 0016 11c0-1.22-.3-2.46-1.12-3.41A4.62 4.62 0 0011.25 6H6.56l2.22-2.22a.75.75 0 00-1.06-1.06l-3.5 3.5a.75.75 0 00.02 1.08l3.5 3.25a.75.75 0 001.02-1.1L6.66 7.5h4.59c1.16 0 1.86.44 2.4 1.07.55.64.85 1.52.85 2.43 0 .9-.3 1.79-.85 2.43a2.92 2.92 0 01-2.4 1.07h-4.5a.75.75 0 00-.75.75z" fill={primaryFill} /></svg>;
};

export default ArrowHookUpLeft20Filled;