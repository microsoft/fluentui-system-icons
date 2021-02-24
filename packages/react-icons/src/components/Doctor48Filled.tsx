import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Doctor48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.25 6C17.01 6 16 7 16 8.25V16H8.25C7.01 16 6 17 6 18.25v11.5C6 30.99 7 32 8.25 32H16v7.75c0 1.24 1 2.25 2.25 2.25h11.5c1.24 0 2.25-1 2.25-2.25V32h7.75c1.24 0 2.25-1 2.25-2.25v-11.5c0-1.24-1-2.25-2.25-2.25H32V8.25C32 7.01 31 6 29.75 6h-11.5z" fill={primaryFill} /></svg>;
};

export default Doctor48Filled;