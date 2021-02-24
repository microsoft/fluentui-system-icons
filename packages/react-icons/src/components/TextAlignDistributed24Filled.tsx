import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextAlignDistributed24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 6a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1z" fill={primaryFill} /><path d="M5.7 15.3a1 1 0 00-1.4 0l-2 2a1 1 0 000 1.4l2 2a1 1 0 001.4-1.4l-.29-.3H18.6l-.3.3a1 1 0 001.42 1.4l2-2a1 1 0 000-1.4l-2-2a1 1 0 00-1.42 1.4l.3.3H5.4l.3-.3a1 1 0 000-1.4z" fill={primaryFill} /><path d="M3 11a1 1 0 100 2h18a1 1 0 100-2H3z" fill={primaryFill} /></svg>;
};

export default TextAlignDistributed24Filled;