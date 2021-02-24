import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowForward24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.21 6.39l.08-.1a1 1 0 011.32-.08l.1.08 5 5a1 1 0 01.08 1.32l-.09.1-5 5a1 1 0 01-1.5-1.32l.1-.1L17.57 13H4a1 1 0 01-1-.88V12a1 1 0 01.88-1h13.7L14.3 7.7a1 1 0 01-.08-1.31l.08-.1-.08.1z" fill={primaryFill} /></svg>;
};

export default ArrowForward24Filled;