import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CompassNorthwest16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 2.5V1a7 7 0 00-6.93 6H2.5a.5.5 0 010 1H1a7 7 0 007 7v-1.5a.5.5 0 011 0v1.43A7 7 0 0015 8h-1.5a.5.5 0 010-1h1.43A7 7 0 009 1.07V2.5a.5.5 0 01-1 0zm1.44 5.34l1 1.92a.5.5 0 01-.68.68l-1.92-1a3 3 0 01-1.28-1.28l-.99-1.91a.5.5 0 01.68-.68l1.9 1a3 3 0 011.29 1.27z" fill={primaryFill} /></svg>;
};

export default CompassNorthwest16Filled;