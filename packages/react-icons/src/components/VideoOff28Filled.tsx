import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const VideoOff28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l2.3 2.3A3.25 3.25 0 002 8.75v10.5c0 1.8 1.46 3.25 3.25 3.25h9.5A3.25 3.25 0 0018 19.37v-.3l6.72 6.71a.75.75 0 001.06-1.06L3.28 2.22z" fill={primaryFill} /><path d="M8.68 5.5L18 14.82v-6.2a3.25 3.25 0 00-3.25-3.12H8.68z" fill={primaryFill} /><path d="M19.5 16.32l4.67 4.66a1.24 1.24 0 001.08-1.24V8.24a1.25 1.25 0 00-2.14-.88L19.5 11v5.33z" fill={primaryFill} /></svg>;
};

export default VideoOff28Filled;