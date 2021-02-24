import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const GlobeClock24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 17.5c0-.34.03-.68.08-1H8.9l.05.3C9.6 19.9 10.8 22 12 22c.21 0 .42-.07.63-.2A6.48 6.48 0 0111 17.5z" fill={primaryFill} /><path d="M9.17 21.6a13.93 13.93 0 01-1.8-5.1h-4.3a10.03 10.03 0 006.1 5.1z" fill={primaryFill} /><path d="M7 12c0-.68.02-1.35.07-2H2.2a10.05 10.05 0 00.26 5h4.7l-.06-.58c-.06-.78-.1-1.6-.1-2.42z" fill={primaryFill} /><path d="M15.5 11.31L15.42 10H8.58l-.04.49a25.97 25.97 0 00.14 4.5h2.82a6.52 6.52 0 014-3.68z" fill={primaryFill} /><path d="M22 12c0-.69-.07-1.36-.2-2h-4.87l.04.65.01.37.52-.02c1.73 0 3.3.68 4.47 1.78L22 12z" fill={primaryFill} /><path d="M21.37 8.5a10.03 10.03 0 00-6.53-6.1l.1.18.17.27c.8 1.42 1.38 3.38 1.67 5.65h4.6z" fill={primaryFill} /><path d="M7.28 8.06c.35-2.33 1-4.3 1.89-5.66l-.13.04-.3.1A10.03 10.03 0 002.63 8.5h4.6l.05-.44z" fill={primaryFill} /><path d="M15.22 8.18C14.65 4.54 13.32 2 12 2c-1.35 0-2.72 2.69-3.26 6.5h6.52l-.04-.32z" fill={primaryFill} /><path d="M23 17.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-5.5 0h2a.5.5 0 010 1H17a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v2.5z" fill={primaryFill} /></svg>;
};

export default GlobeClock24Filled;