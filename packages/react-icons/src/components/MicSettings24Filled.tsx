import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MicSettings24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12c.3 0 .58.02.86.07l.17.72a2 2 0 002.42 1.47l.1-.02.6-.18c.36.46.65 1 .85 1.57l-.45.43a2 2 0 00-.17 2.7l.15.15.47.46c-.2.57-.5 1.1-.85 1.57l-.6-.18a2 2 0 00-2.49 1.35l-.03.1-.17.72a5.18 5.18 0 01-1.72 0l-.17-.72a2 2 0 00-2.42-1.47l-.1.02-.6.18c-.36-.47-.65-1-.85-1.57l.45-.43a2 2 0 00.17-2.7l-.15-.15-.47-.46c.2-.58.5-1.1.85-1.57l.6.18a2 2 0 002.49-1.35l.03-.1.17-.72c.28-.05.57-.07.86-.07zM2.75 12c.38 0 .7.28.74.65l.01.1v.5a5.25 5.25 0 005.03 5.25h.72c.63 0 1.23-.11 1.79-.31.05.5.16 1 .33 1.47-.52.17-1.06.28-1.62.32v1.27a.75.75 0 01-1.5.1v-1.37A6.75 6.75 0 012 13.48v-.73c0-.41.34-.75.75-.75zm14.75 4c-.8 0-1.45.67-1.45 1.5S16.7 19 17.5 19c.8 0 1.45-.67 1.45-1.5S18.3 16 17.5 16zM9 2a4 4 0 014 4v6.8a6.49 6.49 0 00-1.9 3.6A4 4 0 015 13V6a4 4 0 014-4z" fill={primaryFill} /></svg>;
};

export default MicSettings24Filled;