import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Beaker24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 4.5v6.24c0 .37-.1.74-.27 1.07L7.53 14h8.93l-1.19-2.19c-.18-.33-.27-.7-.27-1.07V4.5h1A.75.75 0 0016 3H8a.75.75 0 000 1.5h1z" fill={primaryFill} /><path d="M17.27 15.5H6.73l-1.59 2.91A1.75 1.75 0 006.68 21h10.64a1.75 1.75 0 001.54-2.59l-1.59-2.91z" fill={primaryFill} /></svg>;
};

export default Beaker24Filled;