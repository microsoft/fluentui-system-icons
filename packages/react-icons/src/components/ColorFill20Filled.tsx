import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ColorFill20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 12c0 1.35.93 3 2.75 3 1.55 0 2.46-1.2 2.69-2.39A2 2 0 0118 14v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2c0-1.1.9-2 2-2h.34l1.45 1.45a3 3 0 004.24 0L11.48 12H12z" fill={primaryFill} /><path d="M14.38 9.17l-.22.26c-.12.15-.29.38-.46.64-.31.5-.7 1.23-.7 1.93 0 1 .67 2 1.75 2s1.75-1 1.75-2c0-.7-.39-1.44-.7-1.93a8.13 8.13 0 00-.46-.64l-.21-.25-.02-.02a.47.47 0 00-.36-.16.5.5 0 00-.37.17zm.37 1.14l.2.3c.31.47.55 1 .55 1.39 0 .3-.1.57-.25.75a.62.62 0 01-.5.25.62.62 0 01-.5-.25A1.21 1.21 0 0114 12c0-.4.24-.92.55-1.4l.2-.3z" fill={primaryFill} /><path d="M8.5 1a.5.5 0 00-.5.5v1.56a2 2 0 00-.8.49L3.66 7.09a2 2 0 000 2.82l2.83 2.83a2 2 0 002.83 0l3.54-3.53a2 2 0 000-2.83l-2.83-2.83A2 2 0 009 3V1.5a.5.5 0 00-.5-.5zM8 4.17V5.5a.5.5 0 001 0V4.04a1 1 0 01.32.22l2.83 2.83a1 1 0 01.25.41H4.66l3.25-3.24.09-.08zM4.37 9.21a1 1 0 01-.3-.71h8.08l-3.54 3.54a1 1 0 01-1.41 0L4.37 9.2z" fill={primaryFill} /></svg>;
};

export default ColorFill20Filled;