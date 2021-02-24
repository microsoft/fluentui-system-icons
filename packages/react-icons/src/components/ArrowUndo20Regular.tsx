import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowUndo20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 2.5a.5.5 0 00-1 0v4.9c0 .33.27.6.6.6h4.9a.5.5 0 000-1H5.9l3.48-3.02a4 4 0 015.25 6.04l-8.17 7.1a.5.5 0 00.65.76l8.17-7.1a5 5 0 00-6.56-7.55L5 6.46V2.5z" fill={primaryFill} /></svg>;
};

export default ArrowUndo20Regular;