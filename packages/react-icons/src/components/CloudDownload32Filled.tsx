import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CloudDownload32Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.2 19h3.6c2.87 0 5.2-2.34 5.2-5.25 0-2.9-2.33-5.5-5.2-5.5l-.36.02-.08.01A7.81 7.81 0 0015.99 3a7.81 7.81 0 00-7.36 5.28 5.2 5.2 0 00-.43-.02c-2.87 0-5.2 2.58-5.2 5.49C3 16.65 5.33 19 8.2 19h5.5v-7.12c0-1.27 1.02-2.3 2.28-2.3 1.15 0 2.1.87 2.26 2v.04l.02.22V19h1.89a.5.5 0 00.05 0zm-3.21-7.15A1 1 0 0016 11a1 1 0 00-1 .99v12.76l-3.51-3.48-.13-.1a1.01 1.01 0 00-1.17 0l-.12.1-.1.13a.98.98 0 000 1.16l.1.11 5.24 5.17.12.1c.35.25.83.25 1.18 0l.11-.1 5.23-5.17.1-.11a.98.98 0 00-.1-1.29 1 1 0 00-1.3-.1l-.11.1-3.54 3.5V12l-.01-.14z" fill={primaryFill} /></svg>;
};

export default CloudDownload32Filled;