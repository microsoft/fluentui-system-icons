import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const GlobeVideo24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.9 16.5H11v4c0 .48.14.93.37 1.31-.97-.58-1.88-2.45-2.4-5.01l-.07-.3z" fill={primaryFill} /><path d="M8.67 15H11v-.5a2.5 2.5 0 012.5-2.5h2c0-.69-.03-1.35-.08-2H8.58l-.04.49A25.99 25.99 0 008.67 15z" fill={primaryFill} /><path d="M21.67 12.69c.1-.07.2-.13.32-.17A10.15 10.15 0 0021.8 10h-4.87l.04.66c.02.44.03.89.03 1.34h1.5c.96 0 1.79.54 2.2 1.33l.97-.64z" fill={primaryFill} /><path d="M3.07 16.5h4.3c.37 2.08.98 3.85 1.8 5.1a10.03 10.03 0 01-5.96-4.82l-.14-.28z" fill={primaryFill} /><path d="M2.2 10h4.87a28.21 28.21 0 00.03 4.42l.06.58h-4.7a10 10 0 01-.26-5z" fill={primaryFill} /><path d="M14.94 2.58l-.1-.17c3.01.89 5.44 3.16 6.53 6.09h-4.59c-.31-2.42-.96-4.5-1.84-5.92z" fill={primaryFill} /><path d="M9.04 2.44l.12-.03a14.57 14.57 0 00-1.88 5.65l-.06.44h-4.6a10.03 10.03 0 016.42-6.06z" fill={primaryFill} /><path d="M12 2c1.32 0 2.65 2.54 3.21 6.19l.05.31H8.74C9.28 4.7 10.64 2 12 2z" fill={primaryFill} /><path d="M12 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5v.5l2.22-1.48a.5.5 0 01.78.41v7.14a.5.5 0 01-.78.41L20 20v.5c0 .83-.67 1.5-1.5 1.5h-5a1.5 1.5 0 01-1.5-1.5v-6z" fill={primaryFill} /></svg>;
};

export default GlobeVideo24Filled;