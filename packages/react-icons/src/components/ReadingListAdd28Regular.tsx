import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ReadingListAdd28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 7.51a1.98 1.98 0 013.63-1.1.75.75 0 101.25-.83 3.48 3.48 0 10-2.93 5.4c.04.02.08.02.13.02h15.67a.75.75 0 100-1.5H5.62a.75.75 0 00-.14-.01C4.4 9.49 3.5 8.6 3.5 7.5z" fill={primaryFill} /><path d="M11.75 6a.75.75 0 000 1.5h13.5a.75.75 0 000-1.5h-13.5z" fill={primaryFill} /><path d="M6.75 13.25a.75.75 0 000 1.5h8.93a7.48 7.48 0 012.9-1.5H6.74z" fill={primaryFill} /><path d="M2.75 17h11.11c-.24.47-.45.97-.59 1.5H2.75a.75.75 0 110-1.5z" fill={primaryFill} /><path d="M6.75 20.5H13c0 .51.05 1.02.15 1.5h-6.4a.75.75 0 110-1.5z" fill={primaryFill} /><path d="M27 20.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0zm-6-4a.5.5 0 00-1 0V20h-3.5a.5.5 0 000 1H20v3.5a.5.5 0 101 0V21h3.5a.5.5 0 100-1H21v-3.5z" fill={primaryFill} /></svg>;
};

export default ReadingListAdd28Regular;