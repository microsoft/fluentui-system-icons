import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Pause12Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 3a1 1 0 011-1h1a1 1 0 011 1v6a1 1 0 01-1 1H3a1 1 0 01-1-1V3zm1 0v6h1V3H3z" fill={primaryFill} /><path d="M7 3a1 1 0 011-1h1a1 1 0 011 1v6a1 1 0 01-1 1H8a1 1 0 01-1-1V3zm1 0v6h1V3H8z" fill={primaryFill} /></svg>;
};

export default Pause12Regular;