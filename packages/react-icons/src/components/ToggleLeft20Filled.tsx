import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ToggleLeft20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 6a4 4 0 010 8H6a4 4 0 010-8h8zm-8 6a2 2 0 100-4 2 2 0 000 4z" fill={primaryFill} /></svg>;
};

export default ToggleLeft20Filled;