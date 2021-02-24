import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CaretRight12Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 4a1 1 0 011.7-.72l2.04 2a1 1 0 010 1.43l-2.04 2a1 1 0 01-1.7-.7V3.99zm3.04 2L5 4v4l2.04-2z" fill={primaryFill} /></svg>;
};

export default CaretRight12Regular;