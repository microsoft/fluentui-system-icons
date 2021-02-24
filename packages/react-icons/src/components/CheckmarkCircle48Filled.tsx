import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CheckmarkCircle48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 4a20 20 0 110 40 20 20 0 010-40zm8.63 13.62a1.25 1.25 0 00-1.66-.1l-.1.1-10.12 10.11-3.62-3.61a1.25 1.25 0 00-1.85 1.66l.09.1 4.5 4.5c.45.46 1.17.49 1.66.1l.1-.1 11-11c.5-.48.5-1.28 0-1.76z" fill={primaryFill} /></svg>;
};

export default CheckmarkCircle48Filled;