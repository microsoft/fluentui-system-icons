import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CaretDownLeft16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 4.96a1 1 0 00-1.7-.71l-6.05 6.04a1 1 0 00.7 1.71h5.55c.83 0 1.5-.67 1.5-1.5V4.96z" fill={primaryFill} /></svg>;
};

export default CaretDownLeft16Filled;