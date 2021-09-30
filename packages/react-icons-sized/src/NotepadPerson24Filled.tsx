import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.25 2c.38 0 .7.28.74.65v.85h.76c1.24 0 2.25 1 2.25 2.25v4.33A3.73 3.73 0 0014.46 12H7.15a.75.75 0 000 1.5h7.1c.07.99.52 1.87 1.2 2.5h-.95a2.5 2.5 0 00-2.5 2.5v.5c0 1.1.42 2.15 1.17 3H5.75c-1.24 0-2.25-1-2.25-2.25v-14c0-1.24 1-2.25 2.25-2.25h.75v-.75a.75.75 0 011.5-.1v.85h3v-.75a.75.75 0 011.5-.1v.85h3v-.75c0-.41.33-.75.75-.75zm-5 14h-4.1a.75.75 0 000 1.5H11.35a.75.75 0 000-1.5h-.1zm5-8h-9.1a.75.75 0 000 1.5h9.2a.75.75 0 000-1.5h-.1zM18 10.5a2.74 2.74 0 012 4.64 2.74 2.74 0 01-4.75-1.89A2.74 2.74 0 0118 10.5zm-5 8a1.5 1.5 0 011.5-1.5h7c.83 0 1.5.67 1.5 1.5v.5c0 1.97-1.86 4-5 4a5.32 5.32 0 01-4-1.58A3.6 3.6 0 0113 19v-.5z" fill={primaryFill} /></svg>;
}

const NotepadPerson24Filled = wrapIcon(rawSvg({}), 'NotepadPerson24Filled');
export default NotepadPerson24Filled;
      