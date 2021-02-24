import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ChevronUp20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.2 12.27a.75.75 0 01.03-1.06l5.25-5a.75.75 0 011.04 0l5.25 5a.75.75 0 11-1.04 1.08L10 7.8l-4.73 4.5a.75.75 0 01-1.06-.02z" fill={primaryFill} /></svg>;
};

export default ChevronUp20Filled;