import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Backpack16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 8a1 1 0 011-1h2a1 1 0 011 1H6z" fill={primaryFill} /><path d="M8 1a2 2 0 00-2 2v.42A5 5 0 003 8v2h10V8a5 5 0 00-3-4.58V3a2 2 0 00-2-2zm0 2c-.34 0-.68.03-1 .1V3a1 1 0 012 0v.1c-.32-.07-.66-.1-1-.1zM7 6h2a2 2 0 012 2 1 1 0 01-1 1H6a1 1 0 01-1-1c0-1.1.9-2 2-2z" fill={primaryFill} /><path d="M6 12.5V11H3v1.5A2.5 2.5 0 005.5 15h5a2.5 2.5 0 002.5-2.5V11H7v1.5a.5.5 0 01-1 0z" fill={primaryFill} /></svg>;
};

export default Backpack16Filled;