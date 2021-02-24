import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ToggleLeft16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 4a4 4 0 010 8H5a4 4 0 010-8h6zm-6 6a2 2 0 100-4 2 2 0 000 4z" fill={primaryFill} /></svg>;
};

export default ToggleLeft16Filled;