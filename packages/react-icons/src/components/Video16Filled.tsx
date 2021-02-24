import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Video16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 5.5a2 2 0 00-2-2H4a2 2 0 00-2 2v5c0 1.1.9 2 2 2h4a2 2 0 002-2v-5z" fill={primaryFill} /><path d="M11 6.34v3.32l1.73 1.64a.75.75 0 001.27-.54V5.24c0-.66-.79-1-1.27-.54L11 6.34z" fill={primaryFill} /></svg>;
};

export default Video16Filled;