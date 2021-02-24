import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Bookmark32Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.2 3A4.2 4.2 0 006 7.2V28a1 1 0 001.59.81L16 22.73l8.41 6.08A1 1 0 0026 28V7.2A4.2 4.2 0 0021.8 3H10.2z" fill={primaryFill} /></svg>;
};

export default Bookmark32Filled;