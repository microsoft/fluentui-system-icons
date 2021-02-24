import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SelectObject24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 5a2 2 0 11-4 0 2 2 0 014 0z" fill={primaryFill} /><path d="M8 4.75c0 .41.34.75.75.75h6.5a.75.75 0 000-1.5h-6.5a.75.75 0 00-.75.75z" fill={primaryFill} /><path d="M4.75 8a.75.75 0 00-.75.75v6.5a.75.75 0 001.5 0v-6.5A.75.75 0 004.75 8z" fill={primaryFill} /><path d="M19.25 8a.75.75 0 00-.75.75v6.5a.75.75 0 001.5 0v-6.5a.75.75 0 00-.75-.75z" fill={primaryFill} /><path d="M8.75 20a.75.75 0 010-1.5h6.5a.75.75 0 010 1.5h-6.5z" fill={primaryFill} /><path d="M5 21a2 2 0 100-4 2 2 0 000 4z" fill={primaryFill} /><path d="M21 5a2 2 0 11-4 0 2 2 0 014 0z" fill={primaryFill} /><path d="M19 21a2 2 0 100-4 2 2 0 000 4z" fill={primaryFill} /></svg>;
};

export default SelectObject24Regular;