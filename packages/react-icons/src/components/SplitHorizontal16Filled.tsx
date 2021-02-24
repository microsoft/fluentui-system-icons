import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SplitHorizontal16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.5 8a.5.5 0 000-1h-13a.5.5 0 000 1h13zM11 1a2 2 0 012 2v3H3V3c0-1.1.9-2 2-2h6zM3 9v3c0 1.1.9 2 2 2h6a2 2 0 002-2V9H3z" fill={primaryFill} /></svg>;
};

export default SplitHorizontal16Filled;