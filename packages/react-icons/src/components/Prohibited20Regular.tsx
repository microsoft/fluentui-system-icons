import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Prohibited20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-1 0c0-1.75-.64-3.36-1.7-4.58l-9.88 9.87A7 7 0 0017 10zM4.7 14.58l9.88-9.87a7 7 0 00-9.87 9.87z" fill={primaryFill} /></svg>;
};

export default Prohibited20Regular;