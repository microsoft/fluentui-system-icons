import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PeopleSettings20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 10c.1 0 .2 0 .3.02-.39.28-.74.61-1.04.98H4a1 1 0 00-1 1v1.5C3 14.9 4.58 16 7.5 16c.62 0 1.17-.05 1.67-.14.08.33.2.65.34.95-.6.12-1.28.19-2.01.19C4.09 17 2 15.55 2 13.5V12c0-1.1.9-2 2-2h7z" fill={primaryFill} /><path d="M17 6.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM14.5 5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill={primaryFill} /><path d="M7.5 2a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm0 1a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" fill={primaryFill} /><path d="M10.5 12.72l.36.35a2 2 0 010 2.86l-.36.35c.13.31.3.6.49.87l.4-.11a2 2 0 012.51 1.45l.12.48a4.26 4.26 0 00.96 0l.12-.48a2 2 0 012.52-1.45l.4.11c.18-.27.35-.56.47-.87l-.35-.35a2 2 0 010-2.86l.35-.35c-.12-.31-.29-.6-.48-.87l-.4.11a2 2 0 01-2.51-1.45l-.12-.48a4.26 4.26 0 00-.96 0l-.12.48a2 2 0 01-2.52 1.45l-.4-.11c-.18.27-.35.56-.48.87zm4 2.78a1 1 0 110-2 1 1 0 010 2z" fill={primaryFill} /></svg>;
};

export default PeopleSettings20Regular;