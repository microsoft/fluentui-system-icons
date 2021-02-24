import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ColorLine16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.73 12.07a1.75 1.75 0 001.23.12l2.4-.66a3.16 3.16 0 001.4-.81l.72-.72h5.02c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 011 13.5v-2c0-.57.32-1.06.78-1.32a1.75 1.75 0 00.95 1.89z" fill={primaryFill} /><path d="M11.08 1a1.91 1.91 0 00-1.35.56L4.17 7.12c-.24.24-.4.53-.5.85l-.65 2.4a.5.5 0 00.61.61l2.4-.65c.32-.1.62-.26.85-.5l5.56-5.56A1.92 1.92 0 0011.08 1z" fill={primaryFill} /></svg>;
};

export default ColorLine16Filled;