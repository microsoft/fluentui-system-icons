import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Fps3024Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.75 15a2.25 2.25 0 01.15 4.5H11v1.75c0 .38-.28.7-.65.74l-.1.01a.75.75 0 01-.74-.65l-.01-.1v-5.5c0-.38.28-.7.65-.74l.1-.01h1.5zm0 1.5H11V18h.75a.75.75 0 00.1-1.5h-.1z" fill={primaryFill} /><path d="M18 15a2 2 0 012 2 .75.75 0 01-1.5.1V17a.5.5 0 00-.41-.5h-.72a.62.62 0 00-.09 1.24l.1.01h.5a2.13 2.13 0 01.15 4.24l-.16.01h-.62a2 2 0 01-2-2 .75.75 0 011.5-.1v.1c0 .25.18.45.41.5h.72a.62.62 0 00.09-1.24l-.1-.01h-.5a2.13 2.13 0 01-.15-4.24l.16-.01H18z" fill={primaryFill} /><path d="M7.75 15a.75.75 0 01.1 1.5H5.5V18h1.75a.75.75 0 01.1 1.5H5.5v1.73c0 .38-.28.7-.65.74l-.1.01a.75.75 0 01-.74-.65l-.01-.1v-5.48c0-.38.28-.7.65-.74l.1-.01h3z" fill={primaryFill} /><path d="M15 3a3 3 0 013 2.82V10a3 3 0 01-6 .18V6a3 3 0 013-3zm0 2a1 1 0 00-1 .88V10a1 1 0 002 .12V6a1 1 0 00-1-1z" fill={primaryFill} /><path d="M8 7a1 1 0 10-.5-1.86l-.12.06c-.24.15-.48.3-.76.3-.83 0-1.46-.78-.93-1.42A3 3 0 1110.24 8a3 3 0 11-4.54 3.92c-.54-.64.1-1.42.92-1.42.28 0 .52.15.76.3l.11.06A1 1 0 118 7z" fill={primaryFill} /></svg>;
};

export default Fps3024Filled;