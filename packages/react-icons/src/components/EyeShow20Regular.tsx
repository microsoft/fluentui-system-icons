import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const EyeShow20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.26 11.6A6.97 6.97 0 0110 6c3.2 0 6.06 2.33 6.74 5.6a.5.5 0 00.98-.2A7.97 7.97 0 0010 5a7.97 7.97 0 00-7.72 6.4.5.5 0 00.98.2z" fill={primaryFill} /><path d="M10 8a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm-2.5 3.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z" fill={primaryFill} /></svg>;
};

export default EyeShow20Regular;