import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ToggleRight20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 12a2 2 0 100-4 2 2 0 000 4z" fill={primaryFill} /><path d="M2 10a4 4 0 014-4h8a4 4 0 010 8H6a4 4 0 01-4-4zm4-3a3 3 0 000 6h8a3 3 0 100-6H6z" fill={primaryFill} /></svg>;
};

export default ToggleRight20Regular;