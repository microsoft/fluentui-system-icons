import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Apps16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.81 2.45a1.5 1.5 0 00-2.12 0L7.96 4.18A1.5 1.5 0 006.5 3h-3C2.67 3 2 3.67 2 4.5v8A1.5 1.5 0 003.5 14h8c.83 0 1.5-.67 1.5-1.5v-3c0-.7-.48-1.29-1.13-1.45l1.71-1.7a1.5 1.5 0 000-2.13l-1.77-1.77zM8 6.42L9.58 8H8V6.42zM7 8H3V4.5c0-.28.22-.5.5-.5h3c.27 0 .5.22.5.5V8zM3.2 12.9a.5.5 0 01-.21-.4V9h4v4H3.5a.5.5 0 01-.29-.1zM8 13V9h3.5c.28 0 .5.22.5.5v3a.5.5 0 01-.5.5H8z" fill={primaryFill} /></svg>;
};

export default Apps16Filled;