import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SwipeUp24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 18a1 1 0 001-1V5.41l1.3 1.3a1 1 0 001.31.08l.1-.08a1 1 0 00.08-1.32l-.08-.1-3-3a1 1 0 00-1.32-.08l-.1.08-3 3a1 1 0 001.32 1.5l.1-.08L11 5.4V17a1 1 0 001 1zm0 4a5 5 0 002-9.58v1.7a3.5 3.5 0 11-4 0v-1.7A5 5 0 0012 22z" fill={primaryFill} /></svg>;
};

export default SwipeUp24Filled;