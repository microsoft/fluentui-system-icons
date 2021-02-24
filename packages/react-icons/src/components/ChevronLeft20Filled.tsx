import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ChevronLeft20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.27 15.8a.75.75 0 01-1.06-.03l-5-5.25a.75.75 0 010-1.04l5-5.25a.75.75 0 111.08 1.04L7.8 10l4.5 4.73c.29.3.28.78-.02 1.06z" fill={primaryFill} /></svg>;
};

export default ChevronLeft20Filled;