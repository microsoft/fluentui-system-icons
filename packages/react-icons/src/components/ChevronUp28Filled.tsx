import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ChevronUp28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M23.7 18.7a1 1 0 01-1.4 0L14 10.42l-8.3 8.3a1 1 0 01-1.4-1.42l9-9a1 1 0 011.4 0l9 9a1 1 0 010 1.42z" fill={primaryFill} /></svg>;
};

export default ChevronUp28Filled;