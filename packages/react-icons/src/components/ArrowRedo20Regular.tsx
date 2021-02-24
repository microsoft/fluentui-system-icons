import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowRedo20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 2.5a.5.5 0 011 0v4.9a.6.6 0 01-.6.6h-4.9a.5.5 0 010-1h3.6l-3.48-3.02a4 4 0 10-5.24 6.04l8.17 7.1a.5.5 0 11-.66.76l-8.17-7.1a5 5 0 116.56-7.55L15 6.46V2.5z" fill={primaryFill} /></svg>;
};

export default ArrowRedo20Regular;