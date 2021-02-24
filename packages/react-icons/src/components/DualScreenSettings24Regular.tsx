import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DualScreenSettings24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.02 6a6.63 6.63 0 00.06 1.5H3.75a.25.25 0 00-.25.25v12.5c0 .13.11.25.25.25h7.5V10.33c.41.57.92 1.07 1.5 1.48v8.69h7.5c.13 0 .25-.11.25-.25v-8.62A6.53 6.53 0 0022 9.97v10.28c0 .97-.79 1.75-1.75 1.75H3.75C2.78 22 2 21.2 2 20.25V7.75C2 6.78 2.78 6 3.75 6h6.27zm6.22 11.5a.75.75 0 01.1 1.5h-1.6a.75.75 0 01-.1-1.5h1.6zm-7 0a.75.75 0 01.1 1.5h-1.6a.75.75 0 01-.1-1.5h1.6zM16.5 1c.3 0 .58.02.86.07l.17.72a2 2 0 002.52 1.45l.6-.18c.36.47.65 1 .85 1.57l-.45.43a2 2 0 000 2.88l.45.43c-.2.58-.5 1.1-.85 1.57l-.6-.18a2 2 0 00-2.52 1.45l-.17.72a5.18 5.18 0 01-1.72 0l-.17-.72a2 2 0 00-2.52-1.45l-.6.18c-.36-.47-.65-1-.85-1.57l.45-.43a2 2 0 000-2.88l-.45-.43c.2-.58.5-1.1.85-1.57l.6.18a2 2 0 002.52-1.45l.17-.72c.28-.05.57-.07.86-.07zm0 4c-.8 0-1.45.67-1.45 1.5S15.7 8 16.5 8c.8 0 1.45-.67 1.45-1.5S17.3 5 16.5 5z" fill={primaryFill} /></svg>;
};

export default DualScreenSettings24Regular;