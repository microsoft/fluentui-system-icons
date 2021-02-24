import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowRepeatAllOff24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.61 2.2l.1.1 18 18a1 1 0 01-1.32 1.49l-.1-.08-3.07-3.07c-.6.2-1.23.32-1.89.35L15 19H9.4l1.3 1.3.09.09a1 1 0 01-1.4 1.41l-.1-.08-3-3-.08-.1a1 1 0 010-1.23l.08-.1 3-3 .1-.08a1 1 0 011.22 0l.1.08.08.09a1 1 0 010 1.23l-.08.1L9.4 17h5.6l.54-.03-9.2-9.2a5 5 0 00-1.67 6.75l.14.22a1 1 0 01-1.63 1.16A6.99 6.99 0 014.9 6.32L2.29 3.71a1 1 0 011.32-1.5zM20 7.69a1 1 0 01.79.38l.05.08.02.03a6.96 6.96 0 01-1 8.87l-1.41-1.42a4.99 4.99 0 00.86-6.16l-.14-.22A1 1 0 0120 7.68zm-5.37-5.47l.08.08 3 3a1 1 0 01.09 1.33l-.08.09-3 3a1 1 0 01-1.5-1.32l.08-.1L14.6 7H9.83L7.9 5.1c.28-.05.56-.07.85-.08h5.84l-1.3-1.3a1 1 0 01-.08-1.33l.08-.1a1 1 0 011.33-.07z" fill={primaryFill} /></svg>;
};

export default ArrowRepeatAllOff24Filled;