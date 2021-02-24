import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CaretUp12Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.08 7.38A1 1 0 004 8h4a1 1 0 00.7-1.7l-2-2a1 1 0 00-1.4 0l-2 2a1 1 0 00-.22 1.08zM4 7l1.82-1.82c.1-.1.26-.1.36 0L8 7H4z" fill={primaryFill} /></svg>;
};

export default CaretUp12Regular;