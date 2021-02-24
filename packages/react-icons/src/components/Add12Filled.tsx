import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Add12Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.9 2H6c.38 0 .7.28.74.65l.01.1v2.5h2.5c.38 0 .7.28.74.65L10 6c0 .38-.28.7-.65.74l-.1.01h-2.5v2.5c0 .38-.28.7-.65.74L6 10a.75.75 0 01-.74-.65l-.01-.1v-2.5h-2.5a.75.75 0 01-.74-.65L2 6c0-.38.28-.7.65-.74l.1-.01h2.5v-2.5c0-.38.28-.7.65-.74L6 2h-.1z" fill={primaryFill} /></svg>;
};

export default Add12Filled;