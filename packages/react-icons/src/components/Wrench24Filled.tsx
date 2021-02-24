import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Wrench24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.75 2a5.25 5.25 0 00-5 6.84l-9.07 9.38a2.34 2.34 0 103.37 3.26L15 12.2A5.24 5.24 0 0021.8 5.8a.75.75 0 00-1.25-.32l-3.19 3.18L15.3 6.6l3.16-3.16a.75.75 0 00-.33-1.26c-.44-.12-.9-.18-1.38-.18z" fill={primaryFill} /></svg>;
};

export default Wrench24Filled;