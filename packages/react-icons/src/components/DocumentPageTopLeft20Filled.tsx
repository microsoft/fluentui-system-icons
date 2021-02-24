import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DocumentPageTopLeft20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.75 5.5L8.53 7H7.3l.22-1.5h1.24z" fill={primaryFill} /><path d="M5.5 2C4.67 2 4 2.67 4 3.5v13c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-13c0-.83-.67-1.5-1.5-1.5h-9zm.57 6.44L6.14 8H5.5a.5.5 0 010-1h.78l.22-1.5H6a.5.5 0 010-1h.65l.16-1.07a.5.5 0 01.99.14l-.14.93H8.9l.16-1.07a.5.5 0 01.99.14l-.14.93h.59a.5.5 0 010 1h-.74L9.54 7H10a.5.5 0 010 1h-.6l-.09.59a.5.5 0 11-.99-.15L8.4 8H7.15l-.09.59a.5.5 0 11-.99-.15z" fill={primaryFill} /></svg>;
};

export default DocumentPageTopLeft20Filled;