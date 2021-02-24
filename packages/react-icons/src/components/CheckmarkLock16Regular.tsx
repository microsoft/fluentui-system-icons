import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CheckmarkLock16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 2a6 6 0 016 6.21 2.5 2.5 0 00-1-.2V8a5 5 0 10-4 4.9v1.02A6 6 0 118 2zm-.75 7.04l2.87-2.88a.5.5 0 01.76.64l-.05.07L7.6 10.1a.5.5 0 01-.64.06l-.06-.06-1.75-1.75a.5.5 0 01.63-.76l.07.06 1.4 1.4zm6.25 4.46a.5.5 0 11-1 0 .5.5 0 011 0zm-2-2.5c-.83 0-1.5.67-1.5 1.5v2c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5v-.5a1.5 1.5 0 10-3 0v.5zm1-.5a.5.5 0 111 0v.5h-1v-.5zm-1.5 2c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v2a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-2z" fill={primaryFill} /></svg>;
};

export default CheckmarkLock16Regular;