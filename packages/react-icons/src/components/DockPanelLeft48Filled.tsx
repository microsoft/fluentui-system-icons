import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DockPanelLeft48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 12.75A4.75 4.75 0 018.75 8h30.5A4.75 4.75 0 0144 12.75v22.5A4.75 4.75 0 0139.25 40H8.75A4.75 4.75 0 014 35.25v-22.5zM39.25 37.5c1.24 0 2.25-1 2.25-2.25v-22.5c0-1.24-1-2.25-2.25-2.25H19v27h20.25z" fill={primaryFill} /></svg>;
};

export default DockPanelLeft48Filled;