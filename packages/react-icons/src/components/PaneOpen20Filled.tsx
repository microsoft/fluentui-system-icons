import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PaneOpen20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.82 10.5h3.68a.5.5 0 000-1h-3.68l1-.87a.5.5 0 10-.66-.76l-2 1.75a.5.5 0 000 .76l2 1.75a.5.5 0 10.66-.76l-1-.87z" fill={primaryFill} /><path d="M4 4a2 2 0 00-2 2v8c0 1.1.9 2 2 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm4 11V5h8a1 1 0 011 1v8a1 1 0 01-1 1H8z" fill={primaryFill} /></svg>;
};

export default PaneOpen20Filled;