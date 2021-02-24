import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Location12Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 .5A4.5 4.5 0 0110.5 5c0 1.86-1.42 3.81-4.2 5.9a.5.5 0 01-.6 0C2.92 8.81 1.5 6.86 1.5 5A4.5 4.5 0 016 .5zm0 1A3.5 3.5 0 002.5 5c0 1.36 1.06 2.92 3.22 4.65l.28.22.28-.22C8.44 7.92 9.5 6.35 9.5 5A3.5 3.5 0 006 1.5zM6 4a1 1 0 110 2 1 1 0 010-2z" fill={primaryFill} /></svg>;
};

export default Location12Regular;