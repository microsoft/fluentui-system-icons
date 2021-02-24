import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ColorBackground24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 12.41v5.09A2.5 2.5 0 004.5 20h15a2.5 2.5 0 002.5-2.5v-11A2.5 2.5 0 0019.5 4h-8.94l1.5 1.5h7.44a1 1 0 011 1v11a1 1 0 01-1 1h-15a1 1 0 01-1-1v-3.59L2 12.41z" fill={primaryFill} /><path d="M6 1.75a.75.75 0 111.5 0v1.27a2 2 0 011.23.57l3.54 3.54a2 2 0 010 2.83L8.03 14.2a2 2 0 01-2.83 0l-3.54-3.54a2 2 0 010-2.82l4.25-4.25.09-.08V1.75zm0 4.5v-.63l-2.89 2.9h8.25a.5.5 0 00-.15-.33L7.67 4.65a.5.5 0 00-.17-.11v1.71a.75.75 0 01-1.5 0zm-2.87 3.76l3.13 3.13c.2.2.51.2.7 0L10.1 10H3.13z" fill={primaryFill} /><path d="M11 13.38c0-.5.15-.98.34-1.39.2-.41.44-.8.68-1.13.23-.33.47-.61.64-.81l.3-.32v-.01c.3-.3.78-.3 1.07 0l.3.33A6.98 6.98 0 0115.66 12c.2.4.35.88.35 1.38 0 1.39-1.03 2.62-2.5 2.62S11 14.77 11 13.37zm2.23-1.65c-.2.29-.39.59-.53.89-.14.3-.2.56-.2.76 0 .69.48 1.12 1 1.12s1-.43 1-1.13c0-.19-.06-.44-.2-.75a5.5 5.5 0 00-.8-1.24l-.27.35z" fill={primaryFill} /></svg>;
};

export default ColorBackground24Regular;