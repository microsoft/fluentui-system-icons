import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Connector16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 3a.5.5 0 00-.5.5v1.88l-.95 1.9A.5.5 0 002 7.5v3c0 .28.22.5.5.5H3v1.5a.5.5 0 001 0V11h1v1.5a.5.5 0 001 0V11h.5a.5.5 0 00.5-.5v-3a.5.5 0 00-.05-.22L6 5.38V3.5a.5.5 0 00-.5-.5h-2z" fill={primaryFill} /><path d="M12.5 13h-2a.5.5 0 01-.5-.5v-1.88l-.95-1.9A.5.5 0 019 8.5v-3c0-.28.22-.5.5-.5h.5V3.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5V5h.5c.28 0 .5.22.5.5v3a.5.5 0 01-.05.22l-.95 1.9v1.88a.5.5 0 01-.5.5zM11 5h1V4h-1v1z" fill={primaryFill} /></svg>;
};

export default Connector16Filled;