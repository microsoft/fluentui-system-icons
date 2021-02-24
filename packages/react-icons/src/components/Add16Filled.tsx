import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Add16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.9 3H8c.38 0 .7.28.74.65l.01.1v3.5h3.5c.38 0 .7.28.74.65L13 8c0 .38-.28.7-.65.74l-.1.01h-3.5v3.5c0 .38-.28.7-.65.74L8 13a.75.75 0 01-.74-.65l-.01-.1v-3.5h-3.5a.75.75 0 01-.74-.65L3 8c0-.38.28-.7.65-.74l.1-.01h3.5v-3.5c0-.38.28-.7.65-.74L8 3h-.1z" fill={primaryFill} /></svg>;
};

export default Add16Filled;