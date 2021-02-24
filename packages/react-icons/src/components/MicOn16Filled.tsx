import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MicOn16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 2a2.5 2.5 0 00-2.5 2.5V8a2.5 2.5 0 005 0V4.5A2.5 2.5 0 008 2z" fill={primaryFill} /><path d="M4 7.5c.28 0 .5.22.5.5a3.5 3.5 0 107 0 .5.5 0 011 0 4.5 4.5 0 01-4 4.47v1.03a.5.5 0 01-1 0v-1.03A4.5 4.5 0 013.5 8c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
};

export default MicOn16Filled;