import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const HandLeft28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 4.26v8a.75.75 0 01-1.5 0v-6.5c0-.4-.32-.76-.75-.76-.38 0-.75.36-.75.8v8.95a.75.75 0 01-1.25.56l-.18-.16a3.6 3.6 0 00-.63-.5c-.27-.15-.66-.3-1.38-.4a3.01 3.01 0 00-1.83.24c-.35.2-.6.47-.7.9l2.15 1.5.12.1 2.53 2.7c.86.92 1.57 1.95 2.13 3.07l.38.77c.3.6.9.97 1.57.97h3.86c.56 0 1.06-.26 1.33-.7a20.8 20.8 0 001.55-2.97c.5-1.19.85-2.45.85-3.58V8.27a.75.75 0 10-1.5 0v4.48a.75.75 0 11-1.5 0V5.8c0-.45-.33-.8-.75-.8s-.75.35-.75.8v6.45a.75.75 0 11-1.5 0V4.27a.75.75 0 00-.75-.77.73.73 0 00-.75.76zm-2.24-.76c.3 0 .57.06.82.16l-.82-.16zm.82.16A2.21 2.21 0 0114.75 2c1.1 0 1.91.74 2.17 1.66A2.27 2.27 0 0120 5.8v.32a2.25 2.25 0 013 2.15v8.98c0 1.42-.43 2.88-.96 4.15a22.31 22.31 0 01-1.67 3.2 3.04 3.04 0 01-2.6 1.4h-3.86c-1.24 0-2.37-.7-2.92-1.81l-.37-.76c-.5-1-1.13-1.9-1.88-2.71l-2.48-2.65-2.44-1.7a.75.75 0 01-.32-.62c0-1.24.64-2.1 1.52-2.58a4.5 4.5 0 012.77-.41c.74.11 1.27.28 1.71.5V5.8c0-1.18.95-2.3 2.26-2.3" fill={primaryFill} /></svg>;
};

export default HandLeft28Regular;