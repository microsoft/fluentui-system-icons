import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowSort24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.3 8.8l3.99-4a1 1 0 011.32-.1l.1.1 4 4a1 1 0 01-1.32 1.5l-.1-.1L8 7.93V18.5a1 1 0 01-.88 1H7a1 1 0 01-1-.88V7.9l-2.3 2.3a1 1 0 01-1.31.08l-.1-.08a1 1 0 01-.08-1.32l.08-.1 4-4-4 4zM16.87 4.5H17a1 1 0 011 .88v10.7l2.3-2.3a1 1 0 011.31-.08l.1.08a1 1 0 01.08 1.32l-.08.1-4 4a1 1 0 01-1.32.08l-.1-.08-4-4a1 1 0 011.32-1.5l.1.08L16 16.1V5.5a1 1 0 01.88-.99H17h-.12z" fill={primaryFill} /></svg>;
};

export default ArrowSort24Filled;