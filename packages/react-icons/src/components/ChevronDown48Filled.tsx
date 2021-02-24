import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ChevronDown48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.44 15.94a1.5 1.5 0 012.12 0L24 29.38l13.44-13.44a1.5 1.5 0 012.12 2.12l-14.5 14.5a1.5 1.5 0 01-2.12 0l-14.5-14.5a1.5 1.5 0 010-2.12z" fill={primaryFill} /></svg>;
};

export default ChevronDown48Filled;