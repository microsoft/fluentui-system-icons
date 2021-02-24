import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowDown16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 2.5a.5.5 0 10-1 0v9.7L3.87 8.17a.5.5 0 10-.74.66l4.5 5a.5.5 0 00.74 0l4.5-5a.5.5 0 00-.74-.66L8.5 12.2V2.5z" fill={primaryFill} /></svg>;
};

export default ArrowDown16Regular;