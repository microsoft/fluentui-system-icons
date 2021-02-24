import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ZoomOut24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 10a7.5 7.5 0 10-2.95 5.96l4.74 4.75.1.08a1 1 0 001.32-1.5l-4.75-4.74A7.47 7.47 0 0017.5 10zm-4-1a1 1 0 110 2h-7a1 1 0 110-2h7z" fill={primaryFill} /></svg>;
};

export default ZoomOut24Filled;