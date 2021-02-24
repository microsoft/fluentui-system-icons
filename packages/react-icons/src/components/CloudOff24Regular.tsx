import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CloudOff24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.78 12.22c.3.3.3.77 0 1.06L13.06 16l2.72 2.72c.27.27.3.69.08.98l-.08.09a.75.75 0 01-.97.07l-.09-.07L12 17.06l-2.71 2.71a.75.75 0 01-1.06-1.06l2.71-2.7-2.71-2.72a.75.75 0 01-.07-.98l.07-.08c.27-.27.68-.29.98-.07l.08.07 2.71 2.71 2.73-2.72c.3-.3.77-.3 1.06 0zM12 4c3.52 0 5.52 2.27 5.8 5.02h.1c2.26 0 4.1 1.78 4.1 3.99 0 2.2-1.84 3.99-4.1 3.99h-2.15a.75.75 0 01-.74-.65v-.1c0-.38.28-.69.64-.74h2.25l.16-.01a2.52 2.52 0 002.4-2.5c0-1.31-1.06-2.4-2.4-2.48H17.12l-.1-.01c-.37-.05-.67-.34-.67-.7A4.3 4.3 0 0012 5.46 4.32 4.32 0 007.65 9.8c0 .37-.3.66-.67.7l-.1.01H6.1l-.16.01a2.53 2.53 0 00-2.4 2.33v.32a2.53 2.53 0 002.4 2.33h2.31c.38 0 .69.28.74.65v.1c0 .38-.27.7-.64.74l-.12.01H6.1A4.05 4.05 0 012 13c0-2.2 1.84-3.98 4.1-3.98h.1C6.47 6.25 8.47 4 12 4z" fill={primaryFill} /></svg>;
};

export default CloudOff24Regular;