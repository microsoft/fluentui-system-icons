import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MeetNow24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.96 2.52A15.1 15.1 0 0112 2a15.32 15.32 0 015.16.9 7.13 7.13 0 01.39.16l.02.01h.01l-.33.68.34-.67a.75.75 0 01-.67 1.34h-.01a2.8 2.8 0 00-.3-.13A13.82 13.82 0 0012 3.5a13.6 13.6 0 00-4.61.8 5.6 5.6 0 00-.3.13.75.75 0 11-.68-1.34l.34.67-.34-.67h.02l.02-.02a4.17 4.17 0 01.39-.16c.26-.1.63-.24 1.12-.38z" fill={primaryFill} /><path d="M6.75 20.25l-.33.67.03.02a4.8 4.8 0 00.39.16A15.37 15.37 0 0012 22a15.15 15.15 0 005.16-.9 6.9 6.9 0 00.39-.16l.02-.01h.01l-.33-.68.34.67a.75.75 0 00-.68-1.34 2.61 2.61 0 01-.3.13 13.66 13.66 0 01-4.61.8 13.88 13.88 0 01-4.61-.8 5.75 5.75 0 01-.3-.13.75.75 0 00-.67 1.34l.33-.67z" fill={primaryFill} /><path d="M6.25 6.5C5.01 6.5 4 7.5 4 8.75v6.5c0 1.24 1 2.25 2.25 2.25h6.5c1.24 0 2.25-1 2.25-2.25v-6.5c0-1.24-1-2.25-2.25-2.25h-6.5z" fill={primaryFill} /><path d="M19.27 16.33L16 13.6v-3.2l3.27-2.72a.75.75 0 011.23.57v7.5a.75.75 0 01-1.23.58z" fill={primaryFill} /></svg>;
};

export default MeetNow24Filled;