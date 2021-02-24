import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DoubleSwipeDown24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.75 6a1 1 0 011 1v11.59l1.3-1.3a1 1 0 011.31-.08l.1.08a1 1 0 01.08 1.32l-.08.1-3 3a1 1 0 01-1.32.08l-.1-.08-3-3a1 1 0 011.32-1.5l.1.08 1.29 1.3V7a1 1 0 011-1zm10.5 0a1 1 0 011 1v11.58l1.3-1.29a1 1 0 011.31-.08l.1.08a1 1 0 01.08 1.32l-.09.1-3 3a1 1 0 01-1.32.08l-.09-.08-3-3a1 1 0 011.32-1.5l.1.08 1.29 1.3V7a1 1 0 011-1zM6.75 2a4.75 4.75 0 012 9.06V9.3a3.24 3.24 0 10-4 0v1.75a4.75 4.75 0 012-9.06zm10.5 0a4.75 4.75 0 012 9.06V9.3a3.24 3.24 0 10-4 0v1.75a4.75 4.75 0 012-9.06z" fill={primaryFill} /></svg>;
};

export default DoubleSwipeDown24Filled;