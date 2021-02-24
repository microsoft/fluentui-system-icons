import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Comment12Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 1a2 2 0 00-2 2v4c0 1.1.9 2 2 2v1.5a.5.5 0 00.78.42L6.65 9H9a2 2 0 002-2V3a2 2 0 00-2-2H3z" fill={primaryFill} /></svg>;
};

export default Comment12Filled;