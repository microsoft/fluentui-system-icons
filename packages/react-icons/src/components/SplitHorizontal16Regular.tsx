import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SplitHorizontal16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.5 8a.5.5 0 000-1h-13a.5.5 0 000 1h13zM3 6h1V3a1 1 0 011-1h6a1 1 0 011 1v3h1V3a2 2 0 00-2-2H5a2 2 0 00-2 2v3zm0 6V9h1v3a1 1 0 001 1h6a1 1 0 001-1V9h1v3a2 2 0 01-2 2H5a2 2 0 01-2-2z" fill={primaryFill} /></svg>;
};

export default SplitHorizontal16Regular;