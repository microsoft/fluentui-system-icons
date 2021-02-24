import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowSort20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.3 7.23a.75.75 0 01-1.07 1.06L6.5 6.56v8.69a.75.75 0 01-1.5 0V6.57L3.28 8.28a.75.75 0 11-1.06-1.06l2.95-2.94a.75.75 0 011.12-.06l3 3z" fill={primaryFill} /><path d="M10.7 12.77a.75.75 0 111.07-1.06l1.73 1.73V4.75a.75.75 0 111.5 0v8.68l1.72-1.71a.75.75 0 111.06 1.06l-2.95 2.94a.75.75 0 01-.58.28.75.75 0 01-.53-.22l-3.01-3z" fill={primaryFill} /></svg>;
};

export default ArrowSort20Filled;