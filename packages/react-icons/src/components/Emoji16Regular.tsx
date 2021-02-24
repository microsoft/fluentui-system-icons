import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Emoji16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 7.75a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /><path d="M6.14 9.67a.5.5 0 10-.75.66 3.5 3.5 0 005.22 0 .5.5 0 00-.75-.66 2.5 2.5 0 01-3.72 0z" fill={primaryFill} /><path d="M10.5 7A.75.75 0 119 7a.75.75 0 011.5 0z" fill={primaryFill} /><path d="M14 8A6 6 0 102 8a6 6 0 0012 0zM3 8a5 5 0 1110 0A5 5 0 013 8z" fill={primaryFill} /></svg>;
};

export default Emoji16Regular;