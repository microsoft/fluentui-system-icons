import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowStepIn16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 8.3V1.5a.5.5 0 011 0v6.8l2.15-2.15a.5.5 0 01.7.7l-3 3a.5.5 0 01-.7 0l-3-3a.5.5 0 11.7-.7L7.5 8.29zM8 15a2 2 0 100-4 2 2 0 000 4z" fill={primaryFill} /></svg>;
};

export default ArrowStepIn16Filled;