import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Wrench16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 1a4 4 0 00-3.9 4.91l-5.05 5.24a1.99 1.99 0 002.85 2.77l5-5.07a4 4 0 005.06-4.39.5.5 0 00-.84-.28L12 6.29 9.7 4l2.12-2.12a.5.5 0 00-.28-.84A4.03 4.03 0 0011 1z" fill={primaryFill} /></svg>;
};

export default Wrench16Filled;