import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Info20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 8.91a.5.5 0 00-1 .09v4.6a.5.5 0 001-.1V8.91z" fill={primaryFill} /><path d="M10.8 6.75a.75.75 0 10-1.5 0 .75.75 0 001.5 0z" fill={primaryFill} /><path d="M18 10a8 8 0 10-16 0 8 8 0 0016 0zM3 10a7 7 0 1114 0 7 7 0 01-14 0z" fill={primaryFill} /></svg>;
};

export default Info20Regular;