import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MoreHorizontal28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.75 14a2.75 2.75 0 11-5.5 0 2.75 2.75 0 015.5 0z" fill={primaryFill} /><path d="M16.75 14a2.75 2.75 0 11-5.5 0 2.75 2.75 0 015.5 0z" fill={primaryFill} /><path d="M22 16.75a2.75 2.75 0 100-5.5 2.75 2.75 0 000 5.5z" fill={primaryFill} /></svg>;
};

export default MoreHorizontal28Filled;