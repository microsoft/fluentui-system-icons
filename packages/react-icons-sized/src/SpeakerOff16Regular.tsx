import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 9.7l5.15 5.15a.5.5 0 00.7-.7l-13-13a.5.5 0 10-.7.7L4.29 5H3.5C2.67 5 2 5.66 2 6.5v3c0 .82.67 1.5 1.5 1.5h1.72l2.93 2.87A.5.5 0 009 13.5V9.7zm-1-1v3.6l-2.22-2.18a.5.5 0 00-.35-.14H3.5a.5.5 0 01-.5-.5V6.5c0-.27.22-.5.5-.5h1.79l2.7 2.72z" fill={primaryFill} /><path d="M8 5.88v-2.2L6.89 4.78l-.7-.71 1.96-1.92A.5.5 0 019 2.5v4.38l-1-1z" fill={primaryFill} /><path d="M11.7 9.59l-.79-.8a3.43 3.43 0 00-.33-2.42 2.38 2.38 0 00-.4-.48h.01a.5.5 0 01.62-.78h.01l.02.02a1.6 1.6 0 01.19.18c.1.12.26.3.4.54.3.48.57 1.2.57 2.15 0 .63-.12 1.16-.3 1.59z" fill={primaryFill} /><path d="M13.23 11.1l-.75-.74a5.5 5.5 0 00-.4-5.42 5.51 5.51 0 00-.88-1.04h-.01a.5.5 0 01.62-.8v.01h.01l.03.03a3.14 3.14 0 01.32.3A6.52 6.52 0 0114 8a6.5 6.5 0 01-.77 3.1z" fill={primaryFill} /></svg>;
}

const SpeakerOff16Regular = wrapIcon(rawSvg({}), 'SpeakerOff16Regular');
export default SpeakerOff16Regular;
      