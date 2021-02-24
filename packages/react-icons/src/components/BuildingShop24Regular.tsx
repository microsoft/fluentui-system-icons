import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BuildingShop24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 2c.17 0 .34.06.47.17l.08.07 3.27 3.53.03.04c.1.13.15.29.15.44v1.92c0 1-.38 1.9-1 2.58v10.5c0 .38-.28.7-.65.74l-.1.01H3.75a.75.75 0 01-.74-.65v-.1L3 10.75a3.82 3.82 0 01-1-2.36V6.3c0-.14.02-.28.1-.4l.06-.1.04-.05 3.25-3.5c.12-.13.28-.2.45-.23L6 2h12zm-2.92 8.44l-.01.02a3.83 3.83 0 01-6.15-.02 3.82 3.82 0 01-4.42 1.32v8.74H6v-6.75c0-.38.28-.7.65-.74h4.6c.38 0 .69.27.74.64v6.85h7.5v-8.74a3.82 3.82 0 01-4.4-1.32zM10.5 14.5H7.5v6h3v-6zm6.76-1.5c.38 0 .7.28.75.65v3.6c0 .38-.28.7-.64.75h-3.6a.75.75 0 01-.75-.65v-3.6c0-.38.28-.7.64-.74h3.6zm-.75 1.5h-2v2h2v-2zM8.17 7H3.5V8.34l.04.23.03.16.05.17.05.15.04.09.1.2.1.16.06.07.13.16.14.14.1.09.04.03c.32.25.7.42 1.11.48l.18.02h.16c1.24 0 2.25-.95 2.33-2.16V7zm6.16 0H9.67v1.17c0 1.18.87 2.15 2.01 2.3l.16.02H12c1.23 0 2.24-.95 2.33-2.16V7zm6.17 0h-4.67v1.17c0 1.18.88 2.15 2.02 2.3l.16.02h.16c.56 0 1.08-.2 1.48-.52l.1-.08.1-.12.15-.17c.06-.06.1-.14.15-.21l.1-.19.07-.14.06-.15.03-.1.04-.15.02-.16.02-.16V7zM9.06 3.5H6.33l-1.86 2h3.98l.61-2zm4.3 0h-2.73l-.62 2h3.97l-.61-2zm4.31 0h-2.73l.61 2h3.98l-1.86-2z" fill={primaryFill} /></svg>;
};

export default BuildingShop24Regular;