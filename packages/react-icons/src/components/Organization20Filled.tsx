import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Organization20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 5a3 3 0 113.5 2.96V9.5h3c.83 0 1.5.67 1.5 1.5v1.04a3 3 0 11-1 0V11a.5.5 0 00-.5-.5h-7a.5.5 0 00-.5.5v1.04a3 3 0 11-1 0V11c0-.83.67-1.5 1.5-1.5h3V7.96A3 3 0 017 5z" fill={primaryFill} /></svg>;
};

export default Organization20Filled;