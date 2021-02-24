import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const EyeTrackingOff24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l.13.13c-.23.4-.35.85-.35 1.34v3.6a.75.75 0 001.5-.1V4.62l.01-.05 3.68 3.68A7.44 7.44 0 004.8 11.2v.02c-.01 0-.17.75.43.97.38.15.81-.05.96-.43l.01-.03a2.85 2.85 0 01.25-.49 6.07 6.07 0 011.8-1.93l1.5 1.5a3.5 3.5 0 104.92 4.93l4.75 4.74-.18.01h-3.6a.75.75 0 00.1 1.5h3.66c.43-.03.83-.15 1.18-.35l.13.13a.75.75 0 001.06-1.06L3.28 2.22zm10.34 12.46a2 2 0 11-2.8-2.8l2.8 2.8z" fill={primaryFill} /><path d="M11.45 8.27l-1.33-1.33c.57-.12 1.2-.19 1.88-.19a7.73 7.73 0 016.84 3.75 6.3 6.3 0 01.33.67l.02.04v.02h.01a.75.75 0 01-1.4.53l-.01-.02-.04-.1-.21-.39a6.07 6.07 0 00-5.54-3c-.19 0-.37 0-.55.02z" fill={primaryFill} /><path d="M22 18.82l-1.5-1.5v-1.57a.75.75 0 011.49-.1v3.17z" fill={primaryFill} /><path d="M6.68 3.5L5.18 2h3.07a.75.75 0 01.1 1.5H6.68z" fill={primaryFill} /><path d="M2.75 15c.38 0 .7.28.74.65v3.6l.01.13c.06.59.53 1.06 1.12 1.12h3.73a.75.75 0 010 1.5H4.58A2.75 2.75 0 012 19.43V15.65a.75.75 0 01.75-.65z" fill={primaryFill} /><path d="M19.25 2h.16A2.75 2.75 0 0122 4.59v3.77a.75.75 0 01-1.49 0V4.62a1.25 1.25 0 00-1.13-1.11l-.12-.01h-3.6a.75.75 0 010-1.5h3.6z" fill={primaryFill} /></svg>;
};

export default EyeTrackingOff24Regular;