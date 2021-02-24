import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ReadingListAdd28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 7.5a1.5 1.5 0 012.75-.83A1 1 0 008.4 5.56 3.5 3.5 0 105.46 11H21a1 1 0 100-2H5.5A1.5 1.5 0 014 7.5z" fill={primaryFill} /><path d="M12 5a1 1 0 100 2h13a1 1 0 100-2H12z" fill={primaryFill} /><path d="M7 13a1 1 0 100 2h8.4a7.47 7.47 0 015.06-2H7z" fill={primaryFill} /><path d="M3 17h10.87c-.33.62-.58 1.3-.72 2H3a1 1 0 110-2z" fill={primaryFill} /><path d="M7 21h6.02c.04.7.18 1.37.4 2H7a1 1 0 110-2z" fill={primaryFill} /><path d="M27 20.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0zm-6-4a.5.5 0 00-1 0V20h-3.5a.5.5 0 000 1H20v3.5a.5.5 0 001 0V21h3.5a.5.5 0 000-1H21v-3.5z" fill={primaryFill} /></svg>;
};

export default ReadingListAdd28Filled;