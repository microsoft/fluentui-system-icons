import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SelectObject24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 5a2 2 0 11-4 0 2 2 0 014 0z" fill={primaryFill} /><path d="M8 5a1 1 0 001 1h6a1 1 0 100-2H9a1 1 0 00-1 1z" fill={primaryFill} /><path d="M5 8a1 1 0 00-1 1v6a1 1 0 102 0V9a1 1 0 00-1-1z" fill={primaryFill} /><path d="M19 8a1 1 0 00-1 1v6a1 1 0 102 0V9a1 1 0 00-1-1z" fill={primaryFill} /><path d="M9 20a1 1 0 110-2h6a1 1 0 110 2H9z" fill={primaryFill} /><path d="M5 21a2 2 0 100-4 2 2 0 000 4z" fill={primaryFill} /><path d="M21 5a2 2 0 11-4 0 2 2 0 014 0z" fill={primaryFill} /><path d="M19 21a2 2 0 100-4 2 2 0 000 4z" fill={primaryFill} /></svg>;
};

export default SelectObject24Filled;