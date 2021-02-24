import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const EyeTrackingOn24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.49 15.65a.75.75 0 00-1.49 0V19.43A2.75 2.75 0 004.58 22h3.77a.75.75 0 000-1.5H4.62a1.25 1.25 0 01-1.12-1.12v-3.63l-.01-.1z" fill={primaryFill} /><path d="M21.99 15.65a.75.75 0 00-1.5.1v3.63c-.06.63-.6 1.12-1.24 1.12h-3.6a.75.75 0 00.1 1.5h3.66A2.75 2.75 0 0022 19.25v-3.5l-.01-.1z" fill={primaryFill} /><path d="M9 2.75A.75.75 0 008.25 2H4.58A2.75 2.75 0 002 4.76v3.6a.75.75 0 001.5-.1V4.62C3.57 4 4.1 3.5 4.75 3.5h3.6A.75.75 0 009 2.74z" fill={primaryFill} /><path d="M19.41 2H15.65a.75.75 0 000 1.5h3.72c.6.07 1.06.53 1.12 1.12v3.63l.01.1a.75.75 0 001.49 0V4.58A2.75 2.75 0 0019.41 2z" fill={primaryFill} /><path d="M8.5 13.5a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z" fill={primaryFill} /><path d="M6.21 11.74v.02a.75.75 0 01-.97.44c-.6-.22-.44-.97-.44-.97v-.02a2.5 2.5 0 01.1-.2A7.57 7.57 0 0112 6.75a7.73 7.73 0 016.84 3.75 6.3 6.3 0 01.35.71v.02h.01a.75.75 0 01-1.4.53l-.01-.02-.04-.1-.21-.39a6.07 6.07 0 00-5.54-3 6.24 6.24 0 00-5.54 3 4.78 4.78 0 00-.25.5z" fill={primaryFill} /></svg>;
};

export default EyeTrackingOn24Filled;