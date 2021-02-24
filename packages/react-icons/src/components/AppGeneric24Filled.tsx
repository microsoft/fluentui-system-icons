import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AppGeneric24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 3h.18A3.25 3.25 0 0121 6.08v11.86A3.25 3.25 0 0117.94 21l-.19.01H6.25a3.25 3.25 0 01-3.24-3.07L3 17.75V6.25a3.25 3.25 0 013.07-3.24L6.25 3h11.5zM19 8H5v9.75c0 .65.5 1.18 1.12 1.24l.13.01h11.63a1.25 1.25 0 001.11-1.12l.01-.13V8zm-8.75 1.5c.38 0 .7.28.74.65l.01.1v7c0 .38-.28.7-.65.74l-.1.01h-3.5a.75.75 0 01-.74-.65l-.01-.1v-7c0-.38.28-.7.65-.74l.1-.01h3.5zM9.5 11h-2v5.5h2V11zm6.75 1.5a.75.75 0 01.1 1.5h-3.6a.75.75 0 01-.1-1.49h3.6zm1-3a.75.75 0 01.1 1.5h-4.6a.75.75 0 01-.1-1.5h4.6z" fill={primaryFill} /></svg>;
};

export default AppGeneric24Filled;