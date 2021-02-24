import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowUpLeft24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 3H3.94l-.12.02-.08.02-.1.03-.1.04-.06.04-.06.04-.07.05-.06.06-.1.1-.07.12-.05.11-.04.1-.01.07-.01.05L3 4v7.5a1 1 0 002 .12V6.41l14.3 14.3a1 1 0 001.31.08l.1-.08a1 1 0 00.08-1.32l-.08-.1L6.4 5h5.1a1 1 0 00.98-.88L12.5 4a1 1 0 00-1-1z" fill={primaryFill} /></svg>;
};

export default ArrowUpLeft24Filled;