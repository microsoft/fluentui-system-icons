import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CloudOff48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M31.62 24.37c.5.49.5 1.28 0 1.77L25.75 32l5.87 5.87c.46.46.49 1.18.1 1.67l-.1.1c-.45.46-1.17.49-1.66.1l-.1-.1-5.88-5.87-5.86 5.85a1.25 1.25 0 01-1.76-1.77L22.2 32l-5.85-5.84a1.25 1.25 0 01-.1-1.67l.1-.1a1.25 1.25 0 011.66-.1l.1.1 5.86 5.85 5.88-5.87a1.25 1.25 0 011.76 0zm-7.59-16.3c6.34 0 9.93 4.2 10.46 9.26h.16a7.37 7.37 0 110 14.73h-3.4a1.25 1.25 0 01-.13-2.5H34.84a4.7 4.7 0 004.7-4.72 4.7 4.7 0 00-4.7-4.72H33.4c-.75 0-1.4-.6-1.4-1.35a8 8 0 00-7.98-8.2 8.04 8.04 0 00-7.97 8.2c0 .76-.66 1.35-1.41 1.35h-1.42a4.7 4.7 0 00-4.7 4.72 4.7 4.7 0 004.7 4.72h3.52c.65 0 1.18.5 1.24 1.12v.13c0 .69-.55 1.25-1.24 1.25h-3.33a7.37 7.37 0 110-14.73h.16c.52-5.1 4.12-9.26 10.45-9.26z" fill={primaryFill} /></svg>;
};

export default CloudOff48Regular;