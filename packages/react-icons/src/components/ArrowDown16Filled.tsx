import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowDown16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 2c.41 0 .75.34.75.75v8.79l2.94-3.29a.75.75 0 111.12 1L8.56 14a.75.75 0 01-1.12 0L3.2 9.25a.75.75 0 111.12-1l2.94 3.29V2.75c0-.41.34-.75.75-.75z" fill={primaryFill} /></svg>;
};

export default ArrowDown16Filled;