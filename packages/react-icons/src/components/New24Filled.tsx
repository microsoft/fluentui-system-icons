import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const New24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 4a1 1 0 011 1v8a1 1 0 11-2 0V5a1 1 0 011-1z" fill={primaryFill} /><path d="M4 18a1 1 0 011-1h8a1 1 0 110 2H5a1 1 0 01-1-1z" fill={primaryFill} /><path d="M7.7 6.3a1 1 0 00-1.4 1.4l7 7a1 1 0 001.4-1.4l-7-7z" fill={primaryFill} /></svg>;
};

export default New24Filled;