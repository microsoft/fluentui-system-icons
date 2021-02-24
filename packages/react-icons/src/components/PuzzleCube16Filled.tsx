import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PuzzleCube16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 2v3h4V2H6zM5 6H2v4h3V6zm1 4V6h4v4H6zm-1 1H2v.5A2.5 2.5 0 004.5 14H5v-3zm1 3h4v-3H6v3zm5 0v-3h3v.5a2.5 2.5 0 01-2.5 2.5H11zm3-8v4h-3V6h3zm0-1v-.5A2.5 2.5 0 0011.5 2H11v3h3z" fill={primaryFill} /></svg>;
};

export default PuzzleCube16Filled;