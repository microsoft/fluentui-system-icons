import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Folder32Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.41 8h-.06l-2.23-1.78A1 1 0 0011.5 6H8a4 4 0 00-4 4v1h7.11l3.3-3zm2.98 0l-5.22 4.74a1 1 0 01-.67.26H4v9a4 4 0 004 4h16a4 4 0 004-4V12a4 4 0 00-4-4h-6.61z" fill={primaryFill} /></svg>;
};

export default Folder32Filled;