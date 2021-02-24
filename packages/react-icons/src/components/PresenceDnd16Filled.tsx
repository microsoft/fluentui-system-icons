import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PresenceDnd16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 16A8 8 0 108 0a8 8 0 000 16zM5.25 7h5.5a1 1 0 110 2h-5.5a1 1 0 110-2z" fill={primaryFill} /></svg>;
};

export default PresenceDnd16Filled;