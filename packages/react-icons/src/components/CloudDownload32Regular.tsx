import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CloudDownload32Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.26 9.17A5.96 5.96 0 0116 4.97a6 6 0 015.8 4.41l.06.27.04.14a1 1 0 001.15.64 3.19 3.19 0 01.75-.08 3.4 3.4 0 013.2 3.4A3.27 3.27 0 0123.72 17H20a1 1 0 00-1 1.1 1 1 0 001 .9h4a5.28 5.28 0 004.68-7.09 5.34 5.34 0 00-4.95-3.53h-.14v-.03A8 8 0 0016 3a8 8 0 00-7.58 5.37h-.14A5.34 5.34 0 003 13.75 5.28 5.28 0 008.28 19H12c.7 0 1-.5 1-1a1 1 0 00-1-1H8.07A3.27 3.27 0 015 13.75a3.4 3.4 0 013.26-3.4h.02a3.37 3.37 0 01.67.07l.14.02h.13l.1-.02.08-.01.05-.02.14-.05a1 1 0 00.54-.69v-.03l.07-.24.06-.2zm.7 11.83a1.02 1.02 0 00-.77.18l-.12.1-.1.12a.98.98 0 000 1.16l.1.11 5.24 5.17.12.1c.35.25.83.25 1.18 0l.11-.1 5.23-5.17.1-.11a.98.98 0 00-.1-1.29 1 1 0 00-1.3-.1l-.11.1-3.54 3.5V12l-.01-.14A1 1 0 0016 11a1 1 0 00-1 .99v12.76l-3.51-3.48-.13-.1a1 1 0 00-.4-.17z" fill={primaryFill} /></svg>;
};

export default CloudDownload32Regular;