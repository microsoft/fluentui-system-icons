import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowHookUpRight28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.84 19.98A7.46 7.46 0 0012.25 22h7a.75.75 0 000-1.5h-7a5.97 5.97 0 01-4.35-1.58 4.81 4.81 0 01-1.4-3.42c0-1.25.47-2.5 1.4-3.42a5.97 5.97 0 014.35-1.58h8.19l-3.22 3.22a.75.75 0 101.06 1.06l4.5-4.5a.75.75 0 000-1.06l-4.5-4.5a.75.75 0 10-1.06 1.06L20.44 9h-8.19c-2.34 0-4.17.78-5.41 2.02A6.31 6.31 0 005 15.5c0 1.62.6 3.26 1.84 4.48z" fill={primaryFill} /></svg>;
};

export default ArrowHookUpRight28Regular;