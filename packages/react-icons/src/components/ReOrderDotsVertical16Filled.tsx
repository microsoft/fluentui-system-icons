import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ReOrderDotsVertical16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0 4.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm1.5 3a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM10.5 5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM12 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-1.5 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill={primaryFill} /></svg>;
};

export default ReOrderDotsVertical16Filled;