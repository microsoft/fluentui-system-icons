import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ProtocolHandler24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.48 17.73l-.77-.77 2.48-2.49a3.5 3.5 0 000-4.94L12.7 7.04l.77-.77a2.5 2.5 0 013.54 0l3.96 3.96a2.5 2.5 0 010 3.54l-3.96 3.96a2.5 2.5 0 01-3.54 0z" fill={primaryFill} /><path d="M14.48 13.77a2.5 2.5 0 000-3.54l-3.96-3.96a2.5 2.5 0 00-3.54 0l-3.96 3.96a2.5 2.5 0 000 3.54l3.96 3.96a2.5 2.5 0 003.54 0l3.96-3.96z" fill={primaryFill} /></svg>;
};

export default ProtocolHandler24Filled;