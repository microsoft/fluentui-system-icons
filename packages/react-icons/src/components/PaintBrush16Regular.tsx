import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PaintBrush16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 1a.5.5 0 00-.5.5v7c0 1.1.9 2 2 2H6V13a2 2 0 104 0v-2.5h.5a2 2 0 002-2v-7A.5.5 0 0012 1H4zm7.5 6h-7V2h3v1.5a.5.5 0 101 0V2h1v2.5a.5.5 0 001 0V2h1v5zm-7 1.5V8h7v.5a1 1 0 01-1 1h-1a.5.5 0 00-.5.5v3a1 1 0 01-2 0v-3a.5.5 0 00-.5-.5h-1a1 1 0 01-1-1z" fill={primaryFill} /></svg>;
};

export default PaintBrush16Regular;