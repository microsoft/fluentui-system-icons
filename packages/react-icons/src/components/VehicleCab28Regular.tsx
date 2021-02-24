import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const VehicleCab28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.5 16.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm10.25 1.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zm-8.75.75c0-.41.34-.75.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75zm-1-14.5V2a1 1 0 011-1h6a1 1 0 011 1v1.75h.16a3.75 3.75 0 013.64 2.84L22.4 9h1.35a.75.75 0 010 1.5h-.98l.28 1.12A2.75 2.75 0 0125 14.25v9A2.75 2.75 0 0122.25 26h-1a2.75 2.75 0 01-2.75-2.75v-1h-9v1A2.75 2.75 0 016.75 26h-1A2.75 2.75 0 013 23.25v-9c0-1.24.82-2.29 1.95-2.63l.28-1.12h-.98a.75.75 0 010-1.5H5.6l.6-2.41a3.75 3.75 0 013.64-2.84H10zm1.5 0h5V2.5h-5v1.25zm-1.66 1.5c-1.03 0-1.93.7-2.18 1.7L6.52 11.5h14.96l-1.14-4.55c-.25-1-1.15-1.7-2.18-1.7H9.84zm10.16 17v1c0 .69.56 1.25 1.25 1.25h1c.69 0 1.25-.56 1.25-1.25v-1H20zm-12 1v-1H4.5v1c0 .69.56 1.25 1.25 1.25h1c.69 0 1.25-.56 1.25-1.25zM22.25 13H5.75c-.69 0-1.25.56-1.25 1.25v6.5h19v-6.5c0-.69-.56-1.25-1.25-1.25z" fill={primaryFill} /></svg>;
};

export default VehicleCab28Regular;