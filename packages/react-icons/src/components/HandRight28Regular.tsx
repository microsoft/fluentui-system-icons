import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const HandRight28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 4.26v7.99a.75.75 0 001.5 0V5.76c0-.4.32-.76.75-.76.38 0 .75.36.75.8v8.95a.75.75 0 001.25.56l.18-.16c.24-.22.4-.36.63-.5.27-.15.66-.3 1.38-.4.66-.11 1.34-.02 1.83.24.35.19.6.47.7.9l-2.15 1.5a.76.76 0 00-.12.1l-2.53 2.7c-.86.91-1.58 1.95-2.13 3.07l-.38.76c-.3.6-.9.98-1.57.98h-3.86c-.56 0-1.06-.27-1.33-.7a20.8 20.8 0 01-1.55-2.97 9.7 9.7 0 01-.85-3.58V8.27a.75.75 0 111.5 0v4.48a.75.75 0 001.5 0V5.8c0-.45.33-.8.75-.8s.75.35.75.8v6.45a.75.75 0 101.5 0V4.27c0-.42.32-.77.75-.77.44 0 .75.33.75.76zm2.24-.76c-.3 0-.57.06-.82.16l.82-.16zm-.82.16A2.21 2.21 0 0013.25 2c-1.1 0-1.91.74-2.17 1.66A2.27 2.27 0 008 5.8v.32a2.25 2.25 0 00-3 2.15v8.98c0 1.41.43 2.88.96 4.15a22.3 22.3 0 001.67 3.2c.57.91 1.57 1.4 2.6 1.4h3.86c1.24 0 2.37-.7 2.92-1.81l.37-.77c.5-.98 1.13-1.9 1.88-2.7l2.48-2.65 2.44-1.7c.2-.15.32-.38.32-.62 0-1.24-.64-2.1-1.52-2.58a4.5 4.5 0 00-2.77-.41c-.74.11-1.27.28-1.71.5V5.8a2.3 2.3 0 00-2.26-2.3" fill={primaryFill} /></svg>;
};

export default HandRight28Regular;