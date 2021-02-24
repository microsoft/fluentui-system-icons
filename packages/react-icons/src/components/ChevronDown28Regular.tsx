import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ChevronDown28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.22 9.47c.3-.3.77-.3 1.06 0L14 18.19l8.72-8.72a.75.75 0 111.06 1.06l-9.25 9.25c-.3.3-.77.3-1.06 0l-9.25-9.25a.75.75 0 010-1.06z" fill={primaryFill} /></svg>;
};

export default ChevronDown28Regular;