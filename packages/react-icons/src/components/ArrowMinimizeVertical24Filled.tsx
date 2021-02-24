import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowMinimizeVertical24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.8 18.7a1 1 0 101.4-1.4l-2.5-2.5a1 1 0 00-1.4 0l-2.5 2.5a1 1 0 101.4 1.4l.8-.79V21a1 1 0 102 0v-3.09l.8.8z" fill={primaryFill} /><path d="M4 12a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1z" fill={primaryFill} /><path d="M13 3a1 1 0 10-2 0v3.09l-.8-.8a1 1 0 00-1.4 1.42l2.5 2.5a1 1 0 001.4 0l2.5-2.5a1 1 0 00-1.4-1.42l-.8.8V3z" fill={primaryFill} /></svg>;
};

export default ArrowMinimizeVertical24Filled;