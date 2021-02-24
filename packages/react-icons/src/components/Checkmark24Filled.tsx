import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Checkmark24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 16.59l-3.8-3.8a1 1 0 00-1.4 1.42l4.5 4.5a1 1 0 001.4 0l11-11a1 1 0 00-1.4-1.42L8.5 16.6z" fill={primaryFill} /></svg>;
};

export default Checkmark24Filled;