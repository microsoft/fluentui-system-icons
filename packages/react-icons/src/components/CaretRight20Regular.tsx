import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CaretRight20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.63 14.98A1 1 0 017 14.2V5.8a1 1 0 011.63-.78l4.72 3.81c.74.6.74 1.74 0 2.34l-4.72 3.81zM8 5.8v8.4l4.72-3.81a.5.5 0 000-.78L8 5.8z" fill={primaryFill} /></svg>;
};

export default CaretRight20Regular;