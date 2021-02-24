import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowLeft20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.73 16.8a.75.75 0 001.03-1.1l-5.24-4.95h12.73a.75.75 0 000-1.5H4.52l5.24-4.96A.75.75 0 108.73 3.2L2.31 9.27a1 1 0 000 1.46l6.42 6.07z" fill={primaryFill} /></svg>;
};

export default ArrowLeft20Filled;