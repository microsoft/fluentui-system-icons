import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Cloud24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.34 10a5.75 5.75 0 0111.32 0h.09a4 4 0 010 8H6.25a4 4 0 010-8h.09z" fill={primaryFill} /></svg>;
};

export default Cloud24Filled;