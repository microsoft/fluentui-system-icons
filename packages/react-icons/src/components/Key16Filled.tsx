import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Key16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 11.5v.5a.5.5 0 01-.5.5H6v.5a1 1 0 01-1 1H3a1 1 0 01-1-1v-1.3a1 1 0 01.3-.7l3.86-3.87A4 4 0 1110 10H9v1a.5.5 0 01-.5.5h-1zM11 6a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /></svg>;
};

export default Key16Filled;