import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PinOff20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.85 2.15a.5.5 0 10-.7.7L6.9 7.6 4.02 8.75a1 1 0 00-.34 1.64L6.3 13 3 16.3v.7h.7L7 13.7l2.61 2.62a1 1 0 001.64-.34l1.15-2.88 4.75 4.75a.5.5 0 00.7-.7l-15-15zm14.01 7.73l-3.24 1.62L8.5 6.38l1.62-3.24a2 2 0 013.2-.52l4.06 4.05a2 2 0 01-.52 3.2z" fill={primaryFill} /></svg>;
};

export default PinOff20Filled;