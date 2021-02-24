import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Thinking20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2a3.55 3.55 0 00-3.52 2.1c-.33.7-.43 1.44-.46 1.92-.65.05-1.31.2-1.86.56C3.44 7.06 3 7.85 3 9s.44 1.94 1.16 2.42c.68.45 1.55.58 2.34.58h7c.78 0 1.65-.11 2.34-.56C16.56 10.97 17 10.17 17 9c0-1.15-.44-1.94-1.16-2.42a3.84 3.84 0 00-1.86-.56 5.53 5.53 0 00-.46-1.92A3.56 3.56 0 0010 2zM7 6.5c0-.24 0-1.15.4-1.98.18-.4.46-.78.86-1.05A3 3 0 0110 3a3 3 0 011.74.47c.4.27.68.65.87 1.05.39.83.39 1.74.39 1.98 0 .28.22.5.5.5.71 0 1.34.12 1.79.42.4.27.71.73.71 1.58 0 .89-.31 1.34-.71 1.6-.44.3-1.07.4-1.79.4h-7c-.71 0-1.34-.12-1.79-.42C4.31 10.31 4 9.85 4 9c0-.85.3-1.31.71-1.58C5.16 7.12 5.8 7 6.5 7a.5.5 0 00.5-.5z" fill={primaryFill} /><path d="M8 17a2 2 0 100-4 2 2 0 000 4zm0-1a1 1 0 110-2 1 1 0 010 2z" fill={primaryFill} /><path d="M3.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0-1a.5.5 0 110-1 .5.5 0 010 1z" fill={primaryFill} /></svg>;
};

export default Thinking20Regular;