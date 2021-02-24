import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MapDrive20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.75 6.74a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /><path d="M2 5c0-1.1.9-2 2-2h12a2 2 0 012 2v3.5a.5.5 0 01-.5.5h-7v2h1c.28 0 .5.22.5.5V13h1.5c.27 0 .5.22.5.5v1h3.5a.5.5 0 010 1H14v1a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-1H2.5a.5.5 0 010-1H6v-1c0-.28.23-.5.5-.5H8v-1.5a.5.5 0 01.5-.5h1V9h-7a.5.5 0 01-.5-.5V5zm2-1a1 1 0 00-1 1v3h14V5a1 1 0 00-1-1H4zm7.47 12H13v-2h-1.5a.5.5 0 01-.5-.5V12H9v1.5a.5.5 0 01-.5.5H7v2h4.47z" fill={primaryFill} /></svg>;
};

export default MapDrive20Regular;