import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 1c.28 0 .5.22.5.5V2h2v-.5a.5.5 0 011 0V2h2v-.5a.5.5 0 011 0V2c.83 0 1.5.67 1.5 1.5v2.54c-.5.08-.98.32-1.37.7L10.3 8.1A.5.5 0 0010 8H6a.5.5 0 000 1h3.38l-2.04 2.04c-.12.12-.24.25-.34.4a.5.5 0 00-.5-.44H6a.5.5 0 000 1h.5c.05 0 .1 0 .16-.03-.14.26-.24.54-.31.82L6.05 14c-.1.36-.06.7.07 1H4.5A1.5 1.5 0 013 13.5v-10C3 2.67 3.67 2 4.5 2v-.5c0-.28.22-.5.5-.5zm.5 4.5c0 .28.22.5.5.5h4a.5.5 0 000-1H6a.5.5 0 00-.5.5zm6.84 1.96a1.56 1.56 0 012.2 2.2l-4.28 4.29c-.36.36-.8.6-1.3.73l-1.2.3a.6.6 0 01-.74-.74l.3-1.2c.12-.5.37-.94.73-1.3l4.29-4.28z" fill={primaryFill} /></svg>;
}

const NotepadEdit16Filled = wrapIcon(rawSvg({}), 'NotepadEdit16Filled');
export default NotepadEdit16Filled;
      