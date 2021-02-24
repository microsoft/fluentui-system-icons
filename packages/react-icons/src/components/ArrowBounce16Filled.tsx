import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowBounce16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 4.75A.75.75 0 007.25 4h-5.5a.75.75 0 00-.75.75v5.5a.75.75 0 001.5 0V6.56l5.72 5.72a.75.75 0 001.06 0l5.5-5.5a.75.75 0 10-1.06-1.06l-4.97 4.97L3.56 5.5h3.7c.4 0 .74-.34.74-.75z" fill={primaryFill} /></svg>;
};

export default ArrowBounce16Filled;