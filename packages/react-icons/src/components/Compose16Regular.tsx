import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Compose16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.85 1.85a.5.5 0 10-.7-.7l-8 8L6 10l.85-.15 8-8z" fill={primaryFill} /><path d="M4.5 2A2.5 2.5 0 002 4.5v7A2.5 2.5 0 004.5 14h7a2.5 2.5 0 002.5-2.5v-5a.5.5 0 00-1 0v5c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 013 11.5v-7C3 3.67 3.67 3 4.5 3h5a.5.5 0 000-1h-5z" fill={primaryFill} /></svg>;
};

export default Compose16Regular;