import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Organization20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2a3 3 0 00-.5 5.96V9.5h-3c-.83 0-1.5.67-1.5 1.5v1.04a3 3 0 101 0V11c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v1.04a3 3 0 101 0V11c0-.83-.67-1.5-1.5-1.5h-3V7.96A3 3 0 0010 2zM8 5a2 2 0 114 0 2 2 0 01-4 0zM3.5 15a2 2 0 114 0 2 2 0 01-4 0zm11-2a2 2 0 110 4 2 2 0 010-4z" fill={primaryFill} /></svg>;
};

export default Organization20Regular;