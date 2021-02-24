import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Edit32Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M27.31 10.34a4 4 0 00-5.65-5.65l-1.4 1.4 5.65 5.66 1.4-1.4z" fill={primaryFill} /><path d="M24.5 13.16L12.54 25.12a5 5 0 01-2.32 1.31l-4.58 1.15a1 1 0 01-1.22-1.22l1.15-4.58a5 5 0 011.31-2.32L18.84 7.5l5.66 5.66z" fill={primaryFill} /></svg>;
};

export default Edit32Filled;