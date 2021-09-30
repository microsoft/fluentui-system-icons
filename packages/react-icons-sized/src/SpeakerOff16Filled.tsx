import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 9.7l5.15 5.15a.5.5 0 00.7-.7l-13-13a.5.5 0 10-.7.7L4.29 5H3.5C2.67 5 2 5.66 2 6.5v3c0 .82.67 1.5 1.5 1.5h1.72l2.93 2.87A.5.5 0 009 13.5V9.7z" fill={primaryFill} /><path d="M11.7 9.59l-.79-.8a3.43 3.43 0 00-.33-2.42 2.38 2.38 0 00-.4-.48h.01a.5.5 0 01.62-.78h.01l.02.02a1.6 1.6 0 01.19.18c.1.12.26.3.4.54.3.48.57 1.2.57 2.15 0 .63-.12 1.16-.3 1.59z" fill={primaryFill} /><path d="M13.23 11.1l-.75-.74a5.5 5.5 0 00-.4-5.42 5.51 5.51 0 00-.88-1.04h-.01a.5.5 0 01.62-.8v.01h.01l.03.03a3.14 3.14 0 01.32.3A6.52 6.52 0 0114 8a6.5 6.5 0 01-.77 3.1z" fill={primaryFill} /><path d="M9 6.88L6.18 4.06l1.97-1.92A.5.5 0 019 2.5v4.38z" fill={primaryFill} /></svg>;
}

const SpeakerOff16Filled = wrapIcon(rawSvg({}), 'SpeakerOff16Filled');
export default SpeakerOff16Filled;
      