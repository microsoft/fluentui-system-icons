import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PresenceDnd10Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 10A5 5 0 105 0a5 5 0 000 10zM3.5 4.5h3a.5.5 0 010 1h-3a.5.5 0 010-1z" fill={primaryFill} /></svg>;
};

export default PresenceDnd10Filled;