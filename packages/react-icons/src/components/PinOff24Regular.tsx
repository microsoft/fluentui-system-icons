import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PinOff24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l6.12 6.13-2.87 1.14-.1.05a.75.75 0 00-.15 1.18l3.2 3.2-4.95 4.96V21h1.06l4.96-4.96 3.23 3.24.08.07c.39.3.96.14 1.15-.32l1.15-2.87 5.62 5.62a.75.75 0 001.06-1.06L3.28 2.22zM13.94 15l-.96 2.42-5.9-5.9 2.42-.96L13.94 15z" fill={primaryFill} /><path d="M20.23 10.04l-4.46 2.55 1.1 1.1 4.1-2.35.14-.08a2.25 2.25 0 00.39-3.4l-4.77-5.1-.12-.12a2.25 2.25 0 00-3.5.6L10.78 7.6l1.11 1.11 2.54-4.76.04-.07a.75.75 0 011.17-.09l4.76 5.09.06.06.05.08c.2.36.08.82-.28 1.02z" fill={primaryFill} /></svg>;
};

export default PinOff24Regular;