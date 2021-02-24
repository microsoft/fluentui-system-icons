import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const EyeHide20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.85 2.15a.5.5 0 10-.7.7l3.5 3.5a8.1 8.1 0 00-3.37 5.05.5.5 0 10.98.2 7.09 7.09 0 013.1-4.53l1.59 1.59a3.5 3.5 0 104.88 4.88l4.32 4.31a.5.5 0 00.7-.7l-15-15z" fill={primaryFill} /><path d="M10.12 8l3.37 3.37A3.5 3.5 0 0010.12 8z" fill={primaryFill} /><path d="M7.53 5.41l.8.8C8.87 6.07 9.43 6 10 6c3.2 0 6.06 2.33 6.74 5.6a.5.5 0 10.98-.2A7.97 7.97 0 0010 5c-.86 0-1.69.14-2.47.41z" fill={primaryFill} /></svg>;
};

export default EyeHide20Filled;