import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.75 22c-1.24 0-2.25-1-2.25-2.25v-14c0-1.24 1-2.25 2.25-2.25h.75v-.75c0-.38.28-.7.65-.74l.1-.01c.38 0 .7.28.74.65v.85H11v-.75c0-.38.28-.7.65-.74l.1-.01c.38 0 .7.28.74.65l.01.1v.75h3v-.75c0-.38.28-.7.65-.74l.1-.01c.38 0 .7.28.74.65v.85h.76c1.24 0 2.25 1 2.25 2.25v4.33a3.73 3.73 0 00-1.5-.55V5.75a.75.75 0 00-.75-.75H5.74a.75.75 0 00-.74.75v14c0 .42.34.75.75.75h6.52c.2.55.5 1.05.9 1.5H5.75zM18.5 10.55a2.74 2.74 0 11-1 5.4 2.74 2.74 0 011-5.4zM14.48 17h7.02c.83 0 1.5.67 1.5 1.5v.5c0 1.97-1.86 4-5 4a5.64 5.64 0 01-3.35-1 4.13 4.13 0 01-1.29-1.5c-.24-.48-.36-1-.36-1.5v-.5a1.5 1.5 0 011.48-1.5zm-7.23-5h7.21a3.74 3.74 0 00-.2 1.5H7.25a.75.75 0 01-.1-1.5h.1zm0 4h4a.75.75 0 01.1 1.5h-4.1a.75.75 0 01-.1-1.5h.1zm0-8h9a.75.75 0 01.1 1.5h-9.1a.75.75 0 01-.1-1.5h.1z" fill={primaryFill} /></svg>;
}

const NotepadPerson24Regular = wrapIcon(rawSvg({}), 'NotepadPerson24Regular');
export default NotepadPerson24Regular;
      