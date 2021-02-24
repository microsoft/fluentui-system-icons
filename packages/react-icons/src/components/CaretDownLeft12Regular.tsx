import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CaretDownLeft12Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.3 3.25a1 1 0 011.7.71V7.5C9 8.33 8.33 9 7.5 9H3.96a1 1 0 01-.7-1.7L7.3 3.25zm.7.71L3.96 8H7.5a.5.5 0 00.5-.5V3.96z" fill={primaryFill} /></svg>;
};

export default CaretDownLeft12Regular;