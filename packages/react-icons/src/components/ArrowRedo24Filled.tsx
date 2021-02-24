import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowRedo24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 7.59l-3.64-3.64a6.66 6.66 0 10-9.42 9.42l8.34 8.34a1 1 0 001.41-1.42l-8.34-8.33a4.66 4.66 0 016.42-6.76l.18.17L16.59 9H12a1 1 0 00-1 .88V10a1 1 0 00.88 1H19a1 1 0 001-.88V3a1 1 0 00-2-.11v4.7l-3.64-3.64L18 7.6z" fill={primaryFill} /></svg>;
};

export default ArrowRedo24Filled;