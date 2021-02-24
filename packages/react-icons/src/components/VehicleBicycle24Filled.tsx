import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const VehicleBicycle24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 2a1 1 0 100 2h1.19l.62 3H9V6a1 1 0 00-1-1H5a1 1 0 000 2h2v.86l-.9 3.16a4.5 4.5 0 104.9 4.35l4.47-5.21.25 1.2A4.5 4.5 0 1017.7 11l-1.71-8.2A1 1 0 0015 2h-2zm3.14 11.4l.38 1.8a1 1 0 001.96-.4l-.36-1.72a2.5 2.5 0 11-1.98.32zm-5.83-.3a4.52 4.52 0 00-2.21-1.8L8.75 9h5.08l-3.52 4.1zm-2.76.13c.37.17.7.44.95.77H7.33l.22-.77zm-2.08 0l-.43 1.5A1 1 0 006 16h2.95a2.5 2.5 0 11-3.48-2.78z" fill={primaryFill} /></svg>;
};

export default VehicleBicycle24Filled;