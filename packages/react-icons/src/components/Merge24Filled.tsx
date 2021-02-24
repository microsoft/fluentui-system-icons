import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Merge24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.59 8H4a1 1 0 010-2h4a1 1 0 01.7.3l4.71 4.7h5.17L15.3 7.71a1 1 0 011.42-1.41l5 5a1 1 0 010 1.4l-5 5a1 1 0 01-1.42-1.4l3.3-3.3H13.4l-4.7 4.7A1 1 0 018 18H4a1 1 0 010-2h3.59l4-4-4-4z" fill={primaryFill} /></svg>;
};

export default Merge24Filled;