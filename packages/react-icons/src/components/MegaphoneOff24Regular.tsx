import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MegaphoneOff24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l4.5 4.5-3.11.93A2.25 2.25 0 002 10.87v2.26c0 1 .65 1.87 1.6 2.16l2.4.7v.7a4 4 0 007.6 1.57l5.12 1.52 2 2a.75.75 0 001.06-1.06L3.28 2.22zm13.21 15.33l-12.45-3.7a.75.75 0 01-.54-.72v-2.26c0-.33.22-.63.54-.72l3.9-1.16 8.55 8.56zm-9-1.1l4.63 1.37A2.5 2.5 0 017.5 16.5v-.06z" fill={primaryFill} /><path d="M20.5 6.26v11.06l1.32 1.31c.11-.27.18-.57.18-.9V6.27a2.25 2.25 0 00-2.9-2.15L10 6.8l1.2 1.21 8.34-2.48a.75.75 0 01.96.72z" fill={primaryFill} /></svg>;
};

export default MegaphoneOff24Regular;