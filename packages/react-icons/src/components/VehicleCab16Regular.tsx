import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const VehicleCab16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 9.75a.75.75 0 100-1.5.75.75 0 000 1.5zM11.5 9A.75.75 0 1110 9a.75.75 0 011.5 0zm-5-8a.5.5 0 00-.5.5V2h-.68a2 2 0 00-1.98 1.74L3.17 5H2.5a.5.5 0 000 1h.54v.07C2.43 6.27 2 6.83 2 7.5v3c0 .83.67 1.5 1.5 1.5v1.25a.75.75 0 001.5 0V12h6v1.25a.75.75 0 001.5 0V12c.83 0 1.5-.67 1.5-1.5v-3a1.5 1.5 0 00-1.04-1.43V6h.54a.5.5 0 000-1h-.68l-.16-1.25A2 2 0 0010.68 2H10v-.5a.5.5 0 00-.5-.5h-3zM4.05 6l.28-2.13A1 1 0 015.32 3h5.36a1 1 0 011 .87L11.93 6H4.05zM13 10.5a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-3c0-.28.22-.5.5-.5h9c.28 0 .5.22.5.5v3z" fill={primaryFill} /></svg>;
};

export default VehicleCab16Regular;