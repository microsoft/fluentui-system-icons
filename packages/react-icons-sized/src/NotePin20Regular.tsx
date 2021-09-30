import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 9.02v5.16A3 3 0 006 17h4.55a2 2 0 001.24-.59l4.62-4.62.12-.13a2 2 0 00.47-1.28V5.82A3 3 0 0014 3H9.46c.26.3.42.64.5 1h4.19A2 2 0 0116 6v4h-3.18A3 3 0 0010 13v3H5.85A2 2 0 014 14V9.81a1.82 1.82 0 01-.61-.4L3 9zM13 11h2.78a1 1 0 01-.07.09l-4.62 4.62-.09.07V12.85A2 2 0 0113 11zM8.54 3.39L6.6 1.46a1.5 1.5 0 00-2.4.4L3.4 3.51a1 1 0 01-.57.5l-1.1.39a1 1 0 00-.39 1.65L2.3 7 1 8.3V9h.7L3 7.7l.95.95a1 1 0 001.65-.38l.38-1.1a1 1 0 01.5-.57l1.65-.8a1.5 1.5 0 00.4-2.41z" fill={primaryFill} /></svg>;
}

const NotePin20Regular = wrapIcon(rawSvg({}), 'NotePin20Regular');
export default NotePin20Regular;
      