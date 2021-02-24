import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const StarOneQuarter12Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.72 1.55a.8.8 0 00-1.44 0L4.18 3.8l-2.5.36a.8.8 0 00-.44 1.36l1.8 1.76-.42 2.47a.84.84 0 000 .26.8.8 0 001.16.59L6 9.43l2.22 1.17a.8.8 0 001.17-.85l-.43-2.47 1.8-1.76a.8.8 0 00-.44-1.36L7.83 3.8 6.72 1.55zM5 8.82V4.38a.8.8 0 00.02-.04L6 2.35l.98 1.99c.12.23.34.4.6.43l2.2.32-1.6 1.55a.8.8 0 00-.22.7l.37 2.18L6.37 8.5a.8.8 0 00-.74 0L5 8.82z" fill={primaryFill} /></svg>;
};

export default StarOneQuarter12Filled;