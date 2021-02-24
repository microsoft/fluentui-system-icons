import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DesktopSpeaker24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 21.25c0 .41.34.75.75.75h8.93c-.25-.09-.5-.24-.7-.46L14 20.5h-4V18h1v-2a1 1 0 011-1h1.53l1.44-1.54a1.76 1.76 0 012.8.33c.37-.24.82-.33 1.25-.27a1.75 1.75 0 012.98-1V5.1A2.25 2.25 0 0019.74 3H4.1A2.25 2.25 0 002 5.26v10.66A2.25 2.25 0 004.26 18H8.5v2.49H6.65a.75.75 0 00-.65.75z" fill={primaryFill} /><path d="M22.14 14.3a4.53 4.53 0 00-.91-1.13.75.75 0 00-.96 1.16c.13.1.35.35.59.74.4.67.64 1.48.64 2.43 0 .95-.24 1.76-.64 2.43-.24.39-.46.64-.59.74a.75.75 0 00.96 1.16c.25-.21.59-.58.91-1.13.54-.9.86-1.96.86-3.2 0-1.24-.32-2.3-.86-3.2z" fill={primaryFill} /><path d="M19.87 15.4c-.23-.36-.48-.6-.67-.75a.75.75 0 00-.9 1.2 2.24 2.24 0 01.7 1.65 2.24 2.24 0 01-.7 1.65l-.08.07a.75.75 0 00.98 1.13 3.73 3.73 0 001.3-2.85c0-.81-.23-1.52-.63-2.1z" fill={primaryFill} /><path d="M17 14.75a.75.75 0 00-1.31-.5L14.16 16h-1.41a.75.75 0 00-.75.75v1.5c0 .41.34.75.75.75h1.41l1.53 1.74a.75.75 0 001.31-.49v-5.5z" fill={primaryFill} /></svg>;
};

export default DesktopSpeaker24Filled;