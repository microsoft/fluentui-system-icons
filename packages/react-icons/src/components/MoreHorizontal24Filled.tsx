import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MoreHorizontal24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 12a2 2 0 11-4 0 2 2 0 014 0z" fill={primaryFill} /><path d="M14 12a2 2 0 11-4 0 2 2 0 014 0z" fill={primaryFill} /><path d="M18 14a2 2 0 100-4 2 2 0 000 4z" fill={primaryFill} /></svg>;
};

export default MoreHorizontal24Filled;