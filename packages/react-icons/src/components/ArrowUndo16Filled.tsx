import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowUndo16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.73 3.33a2.79 2.79 0 113.94 3.94l-5.45 5.45a.75.75 0 001.06 1.06l5.45-5.45a4.29 4.29 0 00-6.06-6.06L4.5 4.44V2.5a.75.75 0 10-1.5 0v3.75c0 .41.34.75.75.75H7.5a.75.75 0 000-1.5H5.56l2.17-2.17z" fill={primaryFill} /></svg>;
};

export default ArrowUndo16Filled;