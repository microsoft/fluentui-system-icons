import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Filter24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.5 16a.75.75 0 010 1.5h-3a.75.75 0 010-1.5h3zm3-5a.75.75 0 010 1.5h-9a.75.75 0 010-1.5h9zm3-5a.75.75 0 010 1.5h-15a.75.75 0 010-1.5h15z" fill={primaryFill} /></svg>;
};

export default Filter24Regular;