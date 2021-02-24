import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PresenceDnd12Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 12A6 6 0 106 0a6 6 0 000 12zM3.75 5.25h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 010-1.5z" fill={primaryFill} /></svg>;
};

export default PresenceDnd12Filled;