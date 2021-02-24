import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CaretUp20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.02 12.28a1 1 0 00.78 1.63h8.4a1 1 0 00.78-1.63l-3.81-4.72a1.5 1.5 0 00-2.34 0l-3.81 4.72zm9.18.63H5.8L9.6 8.19a.5.5 0 01.78 0l3.81 4.72z" fill={primaryFill} /></svg>;
};

export default CaretUp20Regular;