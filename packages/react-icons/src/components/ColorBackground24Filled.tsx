import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ColorBackground24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 12.41v5.09A2.5 2.5 0 004.5 20h15a2.5 2.5 0 002.5-2.5v-11A2.5 2.5 0 0019.5 4h-8.94l2.42 2.42a3 3 0 01.72 3.1c.38.03.75.2 1.04.5h.01l.02.03a7.46 7.46 0 01.31.34 7.98 7.98 0 011.48 2.2c.23.46.44 1.1.44 1.78 0 1.86-1.4 3.63-3.5 3.63S10 16.23 10 14.37c0-.29.04-.56.1-.82L8.74 14.9a3 3 0 01-4.25 0L2 12.4z" fill={primaryFill} /><path d="M11.34 13c-.19.4-.34.88-.34 1.38 0 1.39 1.03 2.62 2.5 2.62s2.5-1.23 2.5-2.63c0-.49-.15-.97-.34-1.38-.2-.41-.44-.8-.68-1.13-.23-.33-.47-.61-.64-.81l-.31-.33a.75.75 0 00-1.06 0l-.3.33A6.98 6.98 0 0011.34 13zm2.16-.62a8.42 8.42 0 01.8 1.24c.14.3.2.56.2.76 0 .69-.48 1.12-1 1.12s-1-.43-1-1.13c0-.19.06-.44.2-.75a5.5 5.5 0 01.8-1.24z" fill={primaryFill} /><path d="M6.75 1a.75.75 0 00-.75.75v1.76l-.1.08-4.24 4.25a2 2 0 000 2.82L5.2 14.2a2 2 0 002.83 0l4.24-4.24a2 2 0 000-2.83L8.73 3.59a2 2 0 00-1.23-.57V1.75A.75.75 0 006.75 1zM6 5.62v.63a.75.75 0 101.5 0V4.54a.5.5 0 01.17.11l3.54 3.54c.09.09.14.2.15.32H3.1L6 5.62zm.26 7.52L3.13 10h6.97l-3.13 3.13a.5.5 0 01-.71 0z" fill={primaryFill} /></svg>;
};

export default ColorBackground24Filled;