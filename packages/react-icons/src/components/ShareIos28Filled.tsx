import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ShareIos28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 13a1 1 0 011 .88V22a4 4 0 01-3.8 4H7a4 4 0 01-4-3.8V14a1 1 0 012-.12V22a2 2 0 001.85 2H21a2 2 0 002-1.85V14a1 1 0 011-1zM6.93 8.66l6.36-6.37a1 1 0 011.32-.08l.1.08 6.36 6.37a1 1 0 01-1.32 1.5l-.1-.09L15 5.41V18a1 1 0 01-.88 1H14a1 1 0 01-1-.88V5.4l-4.66 4.66a1 1 0 01-1.32.08l-.1-.08a1 1 0 01-.07-1.32l.08-.1 6.36-6.36-6.36 6.37z" fill={primaryFill} /></svg>;
};

export default ShareIos28Filled;