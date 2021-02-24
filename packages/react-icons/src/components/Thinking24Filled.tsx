import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Thinking24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 18a2 2 0 110 4 2 2 0 010-4zm5.5-3a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM12 2a5.41 5.41 0 015.33 4.47h.08a3.76 3.76 0 110 7.53H6.6a3.76 3.76 0 110-7.53h.08A5.41 5.41 0 0112 2z" fill={primaryFill} /></svg>;
};

export default Thinking24Filled;