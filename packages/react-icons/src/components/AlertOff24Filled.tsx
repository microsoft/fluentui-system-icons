import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AlertOff24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l3 3c-.42.9-.68 1.9-.72 2.96v4.26l-1.41 3.16A.95.95 0 003.95 18h13l3.77 3.78a.75.75 0 001.06-1.06L3.28 2.22z" fill={primaryFill} /><path d="M21 17.05c0 .22-.07.42-.2.58L7.06 3.87A7.5 7.5 0 0119.5 9.5v4l1.42 3.15c.05.12.08.26.08.4z" fill={primaryFill} /><path d="M14.96 19a3 3 0 01-5.92 0h5.92z" fill={primaryFill} /></svg>;
};

export default AlertOff24Filled;