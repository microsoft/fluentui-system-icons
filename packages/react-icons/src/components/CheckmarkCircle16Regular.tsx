import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CheckmarkCircle16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 2a6 6 0 110 12A6 6 0 018 2zm0 1a5 5 0 100 10A5 5 0 008 3zm-.75 6.04l2.87-2.88a.5.5 0 01.77.64l-.06.07L7.6 10.1a.5.5 0 01-.63.06l-.07-.06-1.75-1.75a.5.5 0 01.63-.76l.07.06 1.4 1.4 2.87-2.89-2.87 2.88z" fill={primaryFill} /></svg>;
};

export default CheckmarkCircle16Regular;