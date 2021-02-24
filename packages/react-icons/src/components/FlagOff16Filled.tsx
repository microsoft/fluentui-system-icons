import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FlagOff16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.3 10l4.85 4.85a.5.5 0 00.7-.7l-13-13a.5.5 0 10-.7.7L3 3.71v9.79a.5.5 0 001 0V10h5.3zm3.7 0h-.88l-8-8H13c.4 0 .64.46.4.8L11.12 6l2.3 3.2a.5.5 0 01-.41.8z" fill={primaryFill} /></svg>;
};

export default FlagOff16Filled;