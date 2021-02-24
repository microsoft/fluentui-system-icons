import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CheckmarkUnderlineCircle20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.85-11.85c.2.2.2.5 0 .7l-4 4a.5.5 0 01-.7 0l-2-2a.5.5 0 11.7-.7L9.5 9.79l3.65-3.64c.2-.2.5-.2.7 0zM7.5 13h5a.5.5 0 010 1h-5a.5.5 0 010-1z" fill={primaryFill} /></svg>;
};

export default CheckmarkUnderlineCircle20Filled;