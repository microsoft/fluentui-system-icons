import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Handshake20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.63 3.01a.5.5 0 00.06 0H12a2.5 2.5 0 012 .31 3.7 3.7 0 011.71 5.1L12.5 5.18a.5.5 0 00-.36-.15H10.8a.5.5 0 00-.3.1L8.35 6.76a1.12 1.12 0 01-1.67-.4A1.1 1.1 0 017 5l2.63-1.99z" fill={primaryFill} /><path d="M5.63 11.86l-.01.02-.77.76v.01a.6.6 0 01-.84-.01.6.6 0 010-.84l.76-.76a.6.6 0 01.85 0c.23.22.23.6.01.82z" fill={primaryFill} /><path d="M5.55 13.36a.6.6 0 00.01.82.6.6 0 00.85 0l.76-.76a.6.6 0 00-.09-.91.6.6 0 00-.74.06l-.01.01-.77.76v.02z" fill={primaryFill} /><path d="M3.75 9.8a.6.6 0 010 .84l-.77.76a.6.6 0 01-.84 0 .6.6 0 010-.84l.76-.76a.6.6 0 01.85 0z" fill={primaryFill} /><path d="M8.73 14.13a.6.6 0 010 .84l-.76.76a.6.6 0 01-.85 0 .6.6 0 01-.09-.73.6.6 0 01.09-.11l.76-.76a.6.6 0 01.85 0z" fill={primaryFill} /><path d="M3.53 4.4a4.76 4.76 0 014.3-1.29L6.4 4.21A2.1 2.1 0 006 7.14c.7.92 2.03 1.1 2.95.4l2.02-1.53h.9l1.95 1.93 1.6 1.62.03.03.87.86a1.02 1.02 0 01-1.37 1.51l-.07-.07a.5.5 0 00-.06-.05l-.85-.85a.5.5 0 10-.7.71l.9.9.1.1.03.03a.7.7 0 01-.98.98l-.13-.14a.5.5 0 00-.85.37c0 .13.05.26.15.36l.17.17a.63.63 0 11-.9.9l-.08-.1a1.66 1.66 0 00-.1-.1l-.16-.16a.5.5 0 00-.7.7l.11.13a.5.5 0 00.06.06l.04.05a.65.65 0 01-.96.86L9.11 16l.33-.32a1.58 1.58 0 00-1.09-2.72c0-.4-.16-.78-.47-1.08-.3-.3-.69-.46-1.08-.47A1.6 1.6 0 004.9 9.9 1.61 1.61 0 002.31 9 4.7 4.7 0 013.52 4.4z" fill={primaryFill} /></svg>;
};

export default Handshake20Filled;