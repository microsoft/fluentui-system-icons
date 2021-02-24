import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowMaximizeVertical24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.2 6.2a1 1 0 01-1.4 0l-.8-.79V9a1 1 0 11-2 0V5.41l-.8.8a1 1 0 01-1.4-1.42l2.5-2.5A1 1 0 0112 2a1 1 0 01.7.3l2.5 2.5a1 1 0 010 1.4zM5 11a1 1 0 100 2h14a1 1 0 100-2H5zm7 11a1 1 0 00.7-.3l2.5-2.5a1 1 0 00-1.4-1.4l-.8.79V15a1 1 0 10-2 0v3.59l-.8-.8a1 1 0 00-1.4 1.42l2.5 2.5c.19.19.44.29.7.29" fill={primaryFill} /></svg>;
};

export default ArrowMaximizeVertical24Filled;