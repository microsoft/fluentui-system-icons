import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextDirectionHorizontalLtr24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.75 3a1 1 0 01.92.62l3.75 9a1 1 0 11-1.84.76l-1-2.38H5.92l-1 2.38a1 1 0 01-1.84-.76l3.75-9A1 1 0 017.75 3zm0 3.6l-1 2.4h2l-1-2.4z" fill={primaryFill} /><path d="M17.3 5.3a1 1 0 011.4 0l1.93 1.93a1 1 0 010 1.55l-1.92 1.93a1 1 0 01-1.42-1.42l.3-.29H13a1 1 0 010-2h4.59l-.3-.3a1 1 0 010-1.4z" fill={primaryFill} /><path d="M18.7 14.3a1 1 0 00-1.4 1.4l.29.3H4a1 1 0 100 2h13.59l-.3.3a1 1 0 001.42 1.4l2-2a1 1 0 000-1.4l-2-2z" fill={primaryFill} /></svg>;
};

export default TextDirectionHorizontalLtr24Filled;