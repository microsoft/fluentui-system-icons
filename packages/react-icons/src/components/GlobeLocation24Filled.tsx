import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const GlobeLocation24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.9 16.5h3.62l-.02.5c0 1.2.46 2.36 1.27 3.49-.54.96-1.15 1.5-1.77 1.5-1.2 0-2.4-2.08-3.04-5.2l-.06-.29z" fill={primaryFill} /><path d="M8.67 15h4.2a5.52 5.52 0 012.63-2.9V12c0-.69-.03-1.35-.08-2H8.58l-.04.49A25.99 25.99 0 008.67 15z" fill={primaryFill} /><path d="M18 11.5c1.54 0 2.94.63 3.94 1.66A10.1 10.1 0 0021.8 10h-4.87l.04.66.03.93c.32-.06.66-.09 1-.09z" fill={primaryFill} /><path d="M3.07 16.5h4.3c.37 2.08.98 3.85 1.8 5.1a10.03 10.03 0 01-5.96-4.82l-.14-.28z" fill={primaryFill} /><path d="M2.2 10h4.87a28.21 28.21 0 00.03 4.42l.06.58h-4.7a10 10 0 01-.26-5z" fill={primaryFill} /><path d="M14.94 2.58l-.1-.17c3.01.89 5.44 3.16 6.53 6.09h-4.59c-.31-2.42-.96-4.5-1.84-5.92z" fill={primaryFill} /><path d="M9.04 2.44l.12-.03a14.57 14.57 0 00-1.88 5.65l-.06.44h-4.6a10.03 10.03 0 016.42-6.06z" fill={primaryFill} /><path d="M12 2c1.32 0 2.65 2.54 3.21 6.19l.05.31H8.74C9.28 4.7 10.64 2 12 2z" fill={primaryFill} /><path d="M22.5 17a4.5 4.5 0 00-9 0c0 1.86 1.42 3.81 4.2 5.9a.5.5 0 00.6 0c2.78-2.09 4.2-4.04 4.2-5.9zm-6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" fill={primaryFill} /></svg>;
};

export default GlobeLocation24Filled;