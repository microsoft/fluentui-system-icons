import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ToggleLeft16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 10a2 2 0 110-4 2 2 0 010 4z" fill={primaryFill} /><path d="M15 8a4 4 0 00-4-4H5a4 4 0 100 8h6a4 4 0 004-4zm-4-3a3 3 0 110 6H5a3 3 0 010-6h6z" fill={primaryFill} /></svg>;
};

export default ToggleLeft16Regular;