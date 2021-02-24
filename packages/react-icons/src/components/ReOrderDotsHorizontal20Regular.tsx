import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ReOrderDotsHorizontal20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 7a1 1 0 102 0 1 1 0 00-2 0zM9 7a1 1 0 102 0 1 1 0 00-2 0zM4 8a1 1 0 110-2 1 1 0 010 2zm11 5a1 1 0 102 0 1 1 0 00-2 0zm-5 1a1 1 0 110-2 1 1 0 010 2zm-7-1a1 1 0 102 0 1 1 0 00-2 0z" fill={primaryFill} /></svg>;
};

export default ReOrderDotsHorizontal20Regular;