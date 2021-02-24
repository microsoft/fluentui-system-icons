import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CheckmarkLock16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 8a6 6 0 10-5 5.92V12.5a2.5 2.5 0 011.52-2.3 2.5 2.5 0 013.47-1.99V8zM7.25 9.04l2.87-2.88a.5.5 0 11.7.71L7.6 10.1a.5.5 0 01-.7 0L5.15 8.35a.5.5 0 01.7-.7l1.4 1.4zM11.5 11c-.83 0-1.5.67-1.5 1.5v2c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5v-.5a1.5 1.5 0 10-3 0v.5zm1-.5a.5.5 0 111 0v.5h-1v-.5zm1 3a.5.5 0 11-1 0 .5.5 0 011 0z" fill={primaryFill} /></svg>;
};

export default CheckmarkLock16Filled;