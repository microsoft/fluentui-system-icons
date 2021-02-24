import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FontIncrease20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.95 4.72a.5.5 0 01-.67.23l-1.78-.9-1.78.9a.5.5 0 01-.44-.9l2-1a.5.5 0 01.44 0l2 1a.5.5 0 01.23.67z" fill={primaryFill} /><path d="M10 5c.2 0 .4.13.47.32l3.5 9a.5.5 0 11-.94.36L12 12H8.01l-1.04 2.68a.5.5 0 11-.94-.36l3.5-9A.5.5 0 0110 5zm-1.6 6h3.2L10 6.88 8.4 11z" fill={primaryFill} /></svg>;
};

export default FontIncrease20Regular;