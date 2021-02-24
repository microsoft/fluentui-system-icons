import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Info20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 10a8 8 0 10-16 0 8 8 0 0016 0zM9.5 8.91a.5.5 0 011 0V13.6a.5.5 0 01-1 0V8.9zm-.25-2.16a.75.75 0 111.5 0 .75.75 0 01-1.5 0z" fill={primaryFill} /></svg>;
};

export default Info20Filled;