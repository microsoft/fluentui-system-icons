import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const QrCode20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 11h-2v2h2v2h-2v2h2v-2h2v2h2v-2h-2v-2h2v-2h-2v2h-2v-2z" fill={primaryFill} /><path d="M5 5h2v2H5V5z" fill={primaryFill} /><path d="M5 3a2 2 0 00-2 2v2c0 1.1.9 2 2 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zm-.75 1.75c0-.28.22-.5.5-.5h2.5c.28 0 .5.22.5.5v2.5a.5.5 0 01-.5.5h-2.5a.5.5 0 01-.5-.5v-2.5z" fill={primaryFill} /><path d="M5 13h2v2H5v-2z" fill={primaryFill} /><path d="M5 11a2 2 0 00-2 2v2c0 1.1.9 2 2 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zm-.75 1.75c0-.28.22-.5.5-.5h2.5c.28 0 .5.22.5.5v2.5a.5.5 0 01-.5.5h-2.5a.5.5 0 01-.5-.5v-2.5z" fill={primaryFill} /><path d="M13 5h2v2h-2V5z" fill={primaryFill} /><path d="M13 3a2 2 0 00-2 2v2c0 1.1.9 2 2 2h2a2 2 0 002-2V5a2 2 0 00-2-2h-2zm-.75 1.75c0-.28.22-.5.5-.5h2.5c.28 0 .5.22.5.5v2.5a.5.5 0 01-.5.5h-2.5a.5.5 0 01-.5-.5v-2.5z" fill={primaryFill} /></svg>;
};

export default QrCode20Filled;