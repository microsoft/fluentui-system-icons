import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DesktopSpeakerOff24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l.4.4C2.25 4.1 2 4.65 2 5.26v10.66A2.25 2.25 0 004.26 18H8.5v2.49H6.65a.75.75 0 00.1 1.5h8.93c-.25-.09-.5-.24-.7-.46L14 20.5h-4V18h1v-1.5H4.15a.75.75 0 01-.65-.75V5.15a.75.75 0 01.19-.4l10.83 10.83-.36.42h-1.41a.75.75 0 00-.75.75v1.5c0 .41.34.75.75.75h1.41l1.53 1.74a.75.75 0 001.31-.49v-2.19l3.72 3.72a.75.75 0 001.06-1.06L3.28 2.22z" fill={primaryFill} /><path d="M20.5 17.31l-2.42-2.4a.75.75 0 011.12-.25 3.71 3.71 0 011.3 2.66z" fill={primaryFill} /><path d="M22.69 19.5l-1.24-1.24c.03-.24.05-.5.05-.76 0-.95-.24-1.76-.64-2.43-.24-.39-.46-.64-.59-.74a.75.75 0 11.96-1.16c.25.21.59.58.91 1.13a6.39 6.39 0 01.55 5.2z" fill={primaryFill} /><path d="M7.68 4.5L6.18 3h13.57c1.19 0 2.16.92 2.24 2.1v7.42a1.75 1.75 0 00-1.5-.5V5.25c0-.38-.27-.7-.64-.74l-.1-.01H7.68z" fill={primaryFill} /></svg>;
};

export default DesktopSpeakerOff24Regular;