import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CallPark16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 2a.5.5 0 00-.5.5v5a.5.5 0 001 0V6h1a2 2 0 100-4h-1.5zM12 5h-1V3h1a1 1 0 110 2z" fill={primaryFill} /><path d="M6.57 3a1.75 1.75 0 00-2.2-.88l-.26.1a3.1 3.1 0 00-2.07 3.34c.2 1.32.65 3.07 1.59 4.55a14.37 14.37 0 002.92 3.2c1.25 1.05 3 .82 4.13-.24l.3-.28c.7-.66.73-1.78.06-2.48l-.81-.84a1.5 1.5 0 00-1.35-.44l-1.51.27A4.16 4.16 0 016.02 7l.94-1.16a1.5 1.5 0 00.2-1.6l-.59-1.22zm.38 7.24c.1.08.24.11.38.09L9.06 10a.5.5 0 01.45.15l.8.84c.3.3.28.78-.02 1.07l-.3.27c-.82.78-2 .88-2.8.21-.9-.75-1.95-1.77-2.72-2.98A11.19 11.19 0 013.03 5.4c-.15-.96.45-1.88 1.43-2.25l.27-.1c.36-.13.77.03.94.39l.58 1.22a.5.5 0 01-.06.53L5.1 6.53c-.08.1-.1.36-.1.36v.02a2.36 2.36 0 00.02.16 5 5 0 001.91 3.17h.01z" fill={primaryFill} /></svg>;
};

export default CallPark16Regular;