import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Reward16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 2C2.67 2 2 2.67 2 3.5v1.2c0 .51.27 1 .71 1.27l3.87 2.39a3 3 0 102.84 0l3.87-2.4c.44-.26.71-.75.71-1.27V3.5c0-.83-.67-1.5-1.5-1.5h-9zM6 6.83V3h4v3.83L8.26 7.9a.5.5 0 01-.52 0L6 6.83zM8 9a2 2 0 110 4 2 2 0 010-4z" fill={primaryFill} /></svg>;
};

export default Reward16Filled;