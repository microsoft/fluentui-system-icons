import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ReOrderDotsHorizontal16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 6a1 1 0 102 0 1 1 0 00-2 0zm0 4a1 1 0 102 0 1 1 0 00-2 0zm-3 1a1 1 0 110-2 1 1 0 010 2zM7 6a1 1 0 102 0 1 1 0 00-2 0zm-3 5a1 1 0 110-2 1 1 0 010 2zM3 6a1 1 0 102 0 1 1 0 00-2 0z" fill={primaryFill} /></svg>;
};

export default ReOrderDotsHorizontal16Regular;