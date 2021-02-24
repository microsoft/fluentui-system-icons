import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const VehicleCar16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.04 6v.07C2.43 6.27 2 6.83 2 7.5v3c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-3a1.5 1.5 0 00-1.04-1.43V6h.54a.5.5 0 000-1h-.68l-.16-1.25A2 2 0 0010.68 2H5.32a2 2 0 00-1.98 1.74L3.17 5H2.5a.5.5 0 000 1h.54zm2.28-3h5.36a1 1 0 011 .87L11.93 6H4.05l.28-2.13A1 1 0 015.32 3zm-.07 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zm5.5 0a.75.75 0 110-1.5.75.75 0 010 1.5z" fill={primaryFill} /><path d="M12.5 13H11v.25a.75.75 0 001.5 0V13z" fill={primaryFill} /><path d="M5 13H3.5v.25a.75.75 0 001.5 0V13z" fill={primaryFill} /></svg>;
};

export default VehicleCar16Filled;