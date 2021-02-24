import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CaretDown20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.02 8.63A1 1 0 015.8 7h8.4a1 1 0 01.78 1.63l-3.81 4.72a1.5 1.5 0 01-2.34 0L5.02 8.63zM14.2 8H5.8l3.81 4.72c.2.25.58.25.78 0L14.2 8z" fill={primaryFill} /></svg>;
};

export default CaretDown20Regular;