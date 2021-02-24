import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FolderOpen16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 3a2 2 0 00-2 2v6c0 .41.13.8.34 1.12l1.47-5.04A1.5 1.5 0 014.25 6H13a2 2 0 00-2-2H6.17l-1.1-.9a.5.5 0 00-.32-.1H3z" fill={primaryFill} /><path d="M14.94 7.64a.5.5 0 00-.48-.64H4.25a.5.5 0 00-.48.36l-1.46 5a.5.5 0 00.48.64h9.46a1.5 1.5 0 001.44-1.08l1.25-4.28z" fill={primaryFill} /></svg>;
};

export default FolderOpen16Filled;