import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MeetNow24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.75 6.5c-1.24 0-2.25 1-2.25 2.25v6.5c0 1.24 1 2.25 2.25 2.25h6.5c1.24 0 2.25-1 2.25-2.25v-.73l3.39 1.89a.75.75 0 001.11-.66v-7.5a.75.75 0 00-1.11-.65L15.5 9.48v-.73c0-1.24-1-2.25-2.25-2.25h-6.5zm8.75 4.7l3-1.67v4.95l-3-1.67v-1.62zM14 8.74v6.5c0 .41-.34.75-.75.75h-6.5a.75.75 0 01-.75-.75v-6.5c0-.41.34-.75.75-.75h6.5c.41 0 .75.34.75.75z" fill={primaryFill} /><path d="M6.42 20.92l.03.02a4.8 4.8 0 00.39.16A15.37 15.37 0 0012 22a15.15 15.15 0 005.16-.9 6.9 6.9 0 00.39-.16c.34-.16.54-.68.37-1.03a.75.75 0 00-1-.33h-.02a2.61 2.61 0 01-.29.13 13.66 13.66 0 01-4.61.8 13.88 13.88 0 01-4.61-.8 5.75 5.75 0 01-.3-.13.75.75 0 00-.67 1.34z" fill={primaryFill} /><path d="M7.96 2.52A15.1 15.1 0 0112 2a15.32 15.32 0 015.16.9 7.19 7.19 0 01.39.16l.02.01h.01s.6.36.34 1.02a.75.75 0 01-1 .33h-.01a2.54 2.54 0 00-.3-.13A13.82 13.82 0 0012 3.5a13.6 13.6 0 00-4.61.8 5.6 5.6 0 00-.3.13.75.75 0 11-.68-1.34h.02l.02-.02a4.2 4.2 0 01.39-.16c.26-.1.63-.24 1.12-.38z" fill={primaryFill} /></svg>;
};

export default MeetNow24Regular;