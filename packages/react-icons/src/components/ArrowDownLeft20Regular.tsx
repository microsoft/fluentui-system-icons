import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowDownLeft20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 16a.5.5 0 010 1h-8a.5.5 0 01-.5-.5v-8a.5.5 0 011 0v6.8L16.15 3.14a.5.5 0 11.7.7L4.71 16h6.79z" fill={primaryFill} /></svg>;
};

export default ArrowDownLeft20Regular;