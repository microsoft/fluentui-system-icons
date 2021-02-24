import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MoreVertical48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 16a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" fill={primaryFill} /><path d="M24 27.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" fill={primaryFill} /><path d="M20.5 35.5a3.5 3.5 0 107 0 3.5 3.5 0 00-7 0z" fill={primaryFill} /></svg>;
};

export default MoreVertical48Filled;