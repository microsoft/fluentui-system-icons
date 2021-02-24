import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CaretDownLeft24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 7.2a1.25 1.25 0 00-2.13-.88l-9.55 9.55c-.78.78-.23 2.13.89 2.13h9.04c.97 0 1.75-.78 1.75-1.75V7.21z" fill={primaryFill} /></svg>;
};

export default CaretDownLeft24Filled;