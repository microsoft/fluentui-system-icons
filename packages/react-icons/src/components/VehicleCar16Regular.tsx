import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const VehicleCar16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 9a.75.75 0 11-1.5 0A.75.75 0 016 9z" fill={primaryFill} /><path d="M10.75 9.75a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /><path d="M3.03 6.07L3.04 6H2.5a.5.5 0 010-1h.67l.17-1.26A2 2 0 015.32 2h5.36a2 2 0 011.98 1.75L12.82 5h.68a.5.5 0 010 1h-.55l.01.07c.6.2 1.04.76 1.04 1.43v3c0 .83-.67 1.5-1.5 1.5v1.25a.75.75 0 11-1.5 0V12H5v1.25a.75.75 0 01-1.5 0V12A1.5 1.5 0 012 10.5v-3c0-.67.43-1.23 1.03-1.43zm1.3-2.2L4.05 6h7.9l-.28-2.13a1 1 0 00-1-.87H5.33a1 1 0 00-1 .87zM12.5 11a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-9a.5.5 0 00-.5.5v3c0 .28.22.5.5.5h9z" fill={primaryFill} /></svg>;
};

export default VehicleCar16Regular;