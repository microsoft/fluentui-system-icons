import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextColumnOneWide24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 5a1 1 0 000 2h16a1 1 0 100-2H4z" fill={primaryFill} /><path d="M4 9a1 1 0 000 2h16a1 1 0 100-2H4z" fill={primaryFill} /><path d="M3 14a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z" fill={primaryFill} /><path d="M4 17a1 1 0 100 2h16a1 1 0 100-2H4z" fill={primaryFill} /></svg>;
};

export default TextColumnOneWide24Filled;