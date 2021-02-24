import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const VideoProhibited28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 6A3.25 3.25 0 002 9.25v10.5C2 21.55 3.46 23 5.25 23h8.18c-.17-.48-.3-.98-.36-1.5H5.25c-.97 0-1.75-.78-1.75-1.75V9.25c0-.97.78-1.75 1.75-1.75h10.5c.97 0 1.75.78 1.75 1.75v4.37c.48-.2.98-.36 1.5-.47v-.5l5-3.43v4.64c.54.3 1.05.64 1.5 1.05V8.75c0-1-1.13-1.6-1.96-1.03L19 10.82V9.26C19 7.45 17.55 6 15.75 6H5.25zM20.5 27a6.5 6.5 0 100-13 6.5 6.5 0 000 13zm0-1.5a4.98 4.98 0 01-2.97-.97l7-7a5 5 0 01-4.03 7.97zm2.97-9.03l-7 7a5 5 0 017-7z" fill={primaryFill} /></svg>;
};

export default VideoProhibited28Regular;