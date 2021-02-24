import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowUndo24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.9 6.68l2.74-2.73a6.66 6.66 0 119.42 9.42l-8.34 8.34a1 1 0 01-1.41-1.42l8.34-8.33a4.66 4.66 0 00-6.42-6.76l-.18.17L7.41 9H12a1 1 0 011 .88V10a1 1 0 01-.88 1H4.94l-.1-.01-.1-.03-.14-.04-.08-.04-.1-.07a1 1 0 01-.13-.1l-.09-.1-.07-.12-.05-.1-.04-.1-.01-.06-.02-.08v-.06L4 10V3a1 1 0 012-.11v4.7l3.64-3.64-2.73 2.73z" fill={primaryFill} /></svg>;
};

export default ArrowUndo24Filled;