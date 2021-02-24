import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowUndo16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.85 3.85a3.04 3.04 0 014.3 4.3l-5 5a.5.5 0 10.7.7l5-5a4.04 4.04 0 10-5.7-5.7L4 5.28V2.5a.5.5 0 10-1 0v4a.5.5 0 00.5.5h4a.5.5 0 000-1H4.7l2.15-2.15z" fill={primaryFill} /></svg>;
};

export default ArrowUndo16Regular;