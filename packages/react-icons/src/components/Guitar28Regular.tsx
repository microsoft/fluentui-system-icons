import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Guitar28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.56 16.56a1.5 1.5 0 11-2.12-2.12 1.5 1.5 0 012.12 2.12zm8.35-14.13c.68-.69 1.8-.69 2.48 0l1.18 1.18c.69.69.69 1.8 0 2.48l-6.51 6.52a3.2 3.2 0 01-1.15 4.77l-1.02.5a.92.92 0 00-.49 1l.02.1a5.6 5.6 0 01-2.13 5.58 7.22 7.22 0 01-9.44-.68l-.73-.73a7.22 7.22 0 01-.68-9.44 5.6 5.6 0 015.59-2.13l.09.02c.4.08.8-.12 1-.5l.5-1.01a3.2 3.2 0 014.77-1.15l6.52-6.51zm1.42 1.06a.25.25 0 00-.36 0l-1.24 1.24 1.57 1.51 1.21-1.21c.1-.1.1-.26 0-.36L23.33 3.5zm-1.1 3.81L20.68 5.8l-4.72 4.72c-.3.3-.77.3-1.06 0l-.2-.2a1.7 1.7 0 00-2.72.45l-.51 1.02a2.42 2.42 0 01-2.64 1.29l-.09-.02a4.1 4.1 0 00-4.09 1.56 5.72 5.72 0 00.54 7.48l.73.73a5.72 5.72 0 007.48.54 4.1 4.1 0 001.56-4.1l-.02-.08a2.42 2.42 0 011.3-2.64l1.01-.5a1.7 1.7 0 00.44-2.73l-.19-.2a.75.75 0 010-1.06l4.75-4.75z" fill={primaryFill} /></svg>;
};

export default Guitar28Regular;