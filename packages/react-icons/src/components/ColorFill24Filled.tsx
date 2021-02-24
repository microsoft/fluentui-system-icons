import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ColorFill24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.02 14l-.02.37c0 1.86 1.4 3.63 3.5 3.63a3.54 3.54 0 003.48-3.95A2.5 2.5 0 0122 16.5v3a2.5 2.5 0 01-2.5 2.5h-15A2.5 2.5 0 012 19.5v-3A2.5 2.5 0 014.5 14h2.09l.9.9a3 3 0 004.25 0l.9-.9h.38z" fill={primaryFill} /><path d="M14.34 13c-.19.4-.34.88-.34 1.38 0 1.39 1.03 2.62 2.5 2.62s2.5-1.23 2.5-2.63c0-.49-.15-.97-.34-1.38-.2-.41-.44-.8-.68-1.13-.23-.33-.47-.61-.64-.81l-.31-.33a.75.75 0 00-1.06 0l-.3.33A6.98 6.98 0 0014.34 13zm2.16-.62a8.42 8.42 0 01.8 1.24c.14.3.2.56.2.76 0 .69-.48 1.12-1 1.12s-1-.43-1-1.13c0-.19.06-.44.2-.75a5.5 5.5 0 01.8-1.24z" fill={primaryFill} /><path d="M9.75 1a.75.75 0 00-.75.75v1.76l-.1.08-4.24 4.25a2 2 0 000 2.82L8.2 14.2a2 2 0 002.83 0l4.24-4.24a2 2 0 000-2.83l-3.53-3.54a2 2 0 00-1.24-.57V1.75A.75.75 0 009.75 1zM9 5.62v.63a.75.75 0 001.5 0V4.54a.5.5 0 01.17.11l3.54 3.54c.09.09.14.2.15.32H6.1L9 5.62zm.26 7.52L6.13 10h6.97l-3.13 3.13a.5.5 0 01-.71 0z" fill={primaryFill} /></svg>;
};

export default ColorFill24Filled;