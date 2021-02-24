import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ToggleLeft20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 12a2 2 0 110-4 2 2 0 010 4z" fill={primaryFill} /><path d="M18 10a4 4 0 00-4-4H6a4 4 0 100 8h8a4 4 0 004-4zm-4-3a3 3 0 110 6H6a3 3 0 110-6h8z" fill={primaryFill} /></svg>;
};

export default ToggleLeft20Regular;