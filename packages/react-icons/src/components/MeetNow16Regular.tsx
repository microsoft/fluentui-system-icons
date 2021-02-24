import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MeetNow16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.77 2.92a2.7 2.7 0 01.24-.13A7.1 7.1 0 018 2a6.35 6.35 0 013.22.92h.01a.5.5 0 00.54-.84h-.01l-.02-.02a3.5 3.5 0 00-.28-.16A8.1 8.1 0 008 1a7.35 7.35 0 00-3.74 1.06l-.02.01a.5.5 0 00.53.85z" fill={primaryFill} /><path d="M4 4a2 2 0 00-2 2v4c0 1.1.9 2 2 2h4.5a2 2 0 002-2v-.14l2.75 1.57A.5.5 0 0014 11V5a.5.5 0 00-.75-.43L10.5 6.14V6a2 2 0 00-2-2H4zm6.5 3.29L13 5.86v4.28L10.5 8.7V7.29zM3 6a1 1 0 011-1h4.5a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1V6z" fill={primaryFill} /><path d="M4.77 13.08a.5.5 0 00-.54.84h.01l.02.02a3.02 3.02 0 00.28.16A8.08 8.08 0 008 15a7.35 7.35 0 003.74-1.06l.02-.01a.5.5 0 00-.53-.85 2.4 2.4 0 01-.24.13A7.09 7.09 0 018 14a6.35 6.35 0 01-3.22-.92h-.01z" fill={primaryFill} /></svg>;
};

export default MeetNow16Regular;