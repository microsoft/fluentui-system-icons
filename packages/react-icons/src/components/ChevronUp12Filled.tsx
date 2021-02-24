import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ChevronUp12Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.22 7.53c.3.3.77.3 1.06 0L6 4.81l2.72 2.72a.75.75 0 001.06-1.06L6.53 3.22a.75.75 0 00-1.06 0L2.22 6.47c-.3.3-.3.77 0 1.06z" fill={primaryFill} /></svg>;
};

export default ChevronUp12Filled;