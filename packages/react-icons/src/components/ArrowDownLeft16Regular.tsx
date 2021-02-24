import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowDownLeft16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 13a.5.5 0 010 1h-6a.5.5 0 01-.5-.5v-6a.5.5 0 011 0v4.8L13.15 2.14a.5.5 0 11.7.7L3.71 13H8.5z" fill={primaryFill} /></svg>;
};

export default ArrowDownLeft16Regular;