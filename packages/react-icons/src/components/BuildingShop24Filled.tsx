import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BuildingShop24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 14.5V22h-3v-7.5h3zm6.75-1.5h-3.5a.75.75 0 00-.75.75v3.5c0 .42.34.75.75.75h3.5c.42 0 .75-.33.75-.75v-3.5a.75.75 0 00-.75-.75zm-.75 1.5v2h-2v-2h2zM8.17 7H3.5v1.17c0 1.18.88 2.15 2.02 2.3l.15.02h.16c1.24 0 2.25-.95 2.33-2.16V7zm6.16 0H9.67v1.17c0 1.18.87 2.15 2.01 2.3l.16.02H12c1.23 0 2.24-.95 2.33-2.16V7zm6.17 0h-4.67v1.17c0 1.18.88 2.15 2.02 2.3l.16.02h.16c1.23 0 2.24-.95 2.32-2.16V7zM9.06 3.5H6.33l-1.86 2h3.98l.61-2zm4.3 0h-2.73l-.62 2h3.97l-.61-2zm4.31 0h-2.73l.61 2h3.98l-1.86-2zM2.2 5.74l3.25-3.5c.12-.13.28-.2.45-.23L6 2h12c.17 0 .34.06.47.17l.08.07 3.27 3.53.03.04c.1.13.15.29.15.44v1.92c0 1-.38 1.9-1 2.58v10.5c0 .38-.28.7-.65.74l-.1.01H12v-8.25a.75.75 0 00-.75-.75h-4.5a.75.75 0 00-.75.75V22H3.75a.75.75 0 01-.74-.65v-.1L3 10.75a3.82 3.82 0 01-1-2.39V6.3c0-.14.02-.28.1-.4l.05-.08.05-.07z" fill={primaryFill} /></svg>;
};

export default BuildingShop24Filled;