import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const VideoPersonCall16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 4.75C1 3.78 1.78 3 2.75 3h10.5c.97 0 1.75.78 1.75 1.75v2.19a2.16 2.16 0 00-.59-.3L14 6.51V4.75a.75.75 0 00-.75-.75H2.75a.75.75 0 00-.75.75v6.5c0 .41.34.75.75.75H5v-1a1 1 0 011-1h4a1 1 0 011 1v.2c-.36 0-.7.1-1 .3V11H6v1h3.48l-.47.7-.07.12-.02.02-.07.16h-6.1C1.78 13 1 12.22 1 11.25v-6.5z" fill={primaryFill} /><path d="M14.92 8.5c.05.24.08.48.08.73v.03c0 .87-.32 1.88-.94 3.02-.13.24-.26.46-.4.67-.69 1.08-1.44 1.75-2.25 2-.37.12-.77.03-1.07-.22l-.08-.08-.31-.3a.88.88 0 01-.15-1.04l.05-.07.47-.69a.79.79 0 01.8-.33l.08.02.86.3a3.28 3.28 0 001.25-2.02l.02-.17-.72-.68a.88.88 0 01-.22-.9l.03-.08.32-.76a.78.78 0 01.88-.49l.08.02.4.13c.41.13.72.48.82.91z" fill={primaryFill} /><path d="M8 9a2 2 0 100-4 2 2 0 000 4zm0-1a1 1 0 110-2 1 1 0 010 2z" fill={primaryFill} /></svg>;
};

export default VideoPersonCall16Regular;