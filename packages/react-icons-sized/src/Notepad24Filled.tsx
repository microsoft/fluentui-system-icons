import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.25 2c.38 0 .7.28.74.65l.01.1v.75h.75c1.24 0 2.25 1 2.25 2.25V16h-3.91A2.25 2.25 0 0014 18.1V22H5.75c-1.24 0-2.25-1-2.25-2.25v-14c0-1.24 1-2.25 2.25-2.25h.75v-.75a.75.75 0 011.5-.1v.85h3v-.75a.75.75 0 011.5-.1v.85h3v-.75c0-.41.34-.75.75-.75zm3.3 15.5l-4.06 4.07v-3.32l.01-.1c.05-.33.31-.6.64-.64l.1-.01h3.32zm-8.3-1.5h-4.1a.75.75 0 000 1.5H11.35a.75.75 0 000-1.5h-.1zm5-4h-9.1a.75.75 0 000 1.5h9.2a.75.75 0 000-1.5h-.1zm0-4h-9.1a.75.75 0 000 1.5h9.2a.75.75 0 000-1.5h-.1z" fill={primaryFill} /></svg>;
}

const Notepad24Filled = wrapIcon(rawSvg({}), 'Notepad24Filled');
export default Notepad24Filled;
      