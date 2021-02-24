import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowPrevious24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 3a1 1 0 00-1 .88V20a1 1 0 002 .12V4a1 1 0 00-1-1zm12.7.3a1 1 0 00-1.31-.09l-.1.08-8 8a1 1 0 00-.08 1.32l.08.1 8 8a1 1 0 001.5-1.32l-.08-.1L11.4 12l7.3-7.3a1 1 0 000-1.4z" fill={primaryFill} /></svg>;
};

export default ArrowPrevious24Filled;