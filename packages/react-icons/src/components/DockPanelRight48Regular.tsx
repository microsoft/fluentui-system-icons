import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DockPanelRight48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.75 8A4.75 4.75 0 004 12.75v22.5A4.75 4.75 0 008.75 40h30.5A4.75 4.75 0 0044 35.25v-22.5A4.75 4.75 0 0039.25 8H8.75zM6.5 12.75c0-1.24 1-2.25 2.25-2.25H29v27H8.75c-1.24 0-2.25-1-2.25-2.25v-22.5zm25 24.75v-27h7.75c1.24 0 2.25 1 2.25 2.25v22.5c0 1.24-1 2.25-2.25 2.25H31.5z" fill={primaryFill} /></svg>;
};

export default DockPanelRight48Regular;