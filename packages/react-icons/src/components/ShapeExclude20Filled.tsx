import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ShapeExclude20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 10.5v-6A2.5 2.5 0 014.5 2h6A2.5 2.5 0 0113 4.5V7H9.5A2.5 2.5 0 007 9.5V13H4.5A2.5 2.5 0 012 10.5zM7 13v2.5A2.5 2.5 0 009.5 18h6a2.5 2.5 0 002.5-2.5v-6A2.5 2.5 0 0015.5 7H13v3.5a2.5 2.5 0 01-2.5 2.5H7z" fill={primaryFill} /></svg>;
};

export default ShapeExclude20Filled;