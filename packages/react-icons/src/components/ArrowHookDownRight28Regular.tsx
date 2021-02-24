import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowHookDownRight28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.84 8.02A7.46 7.46 0 0112.25 6h7a.75.75 0 010 1.5h-7c-1.99 0-3.43.66-4.35 1.58a4.81 4.81 0 00-1.4 3.42c0 1.25.47 2.5 1.4 3.42a5.97 5.97 0 004.35 1.58h8.19l-3.22-3.22a.75.75 0 111.06-1.06l4.5 4.5a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 11-1.06-1.06L20.44 19h-8.19a7.46 7.46 0 01-5.41-2.02A6.31 6.31 0 015 12.5c0-1.62.6-3.26 1.84-4.48z" fill={primaryFill} /></svg>;
};

export default ArrowHookDownRight28Regular;