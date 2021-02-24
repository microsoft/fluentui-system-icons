import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Power24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.2 4.84a1 1 0 01.85 1.82 7 7 0 105.92 0 1 1 0 01.84-1.8 9 9 0 11-7.6-.02zM12 2a1 1 0 011 .88V10a1 1 0 01-2 .12V3a1 1 0 011-1z" fill={primaryFill} /></svg>;
};

export default Power24Filled;