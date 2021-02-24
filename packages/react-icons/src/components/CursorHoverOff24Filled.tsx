import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CursorHoverOff24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l1.05 1.05A2.5 2.5 0 002 6.5v9A2.5 2.5 0 004.5 18H9v-7.25c0-.2.04-.4.1-.59l.9.9v10.19a.75.75 0 001.37.42l2.46-3.58 4.05.85 2.84 2.84a.75.75 0 001.06-1.06L3.28 2.22z" fill={primaryFill} /><path d="M7.18 4l13.63 13.63A2.5 2.5 0 0022 15.5v-9A2.5 2.5 0 0019.5 4H7.18z" fill={primaryFill} /></svg>;
};

export default CursorHoverOff24Filled;