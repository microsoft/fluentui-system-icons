import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Maximize48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 11.5A5.5 5.5 0 0111.5 6h25a5.5 5.5 0 015.5 5.5v25a5.5 5.5 0 01-5.5 5.5h-25A5.5 5.5 0 016 36.5v-25zM11.5 9A2.5 2.5 0 009 11.5v25a2.5 2.5 0 002.5 2.5h25a2.5 2.5 0 002.5-2.5v-25A2.5 2.5 0 0036.5 9h-25z" fill={primaryFill} /></svg>;
};

export default Maximize48Filled;