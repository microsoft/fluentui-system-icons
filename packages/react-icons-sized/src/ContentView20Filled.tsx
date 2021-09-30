import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 7H6v2h8V7z" fill={primaryFill} /><path d="M12 12h2v1h-2v-1z" fill={primaryFill} /><path d="M6 3a3 3 0 00-3 3v8a3 3 0 003 3h8a3 3 0 003-3V6a3 3 0 00-3-3H6zM5 7a1 1 0 011-1h8a1 1 0 011 1v2a1 1 0 01-1 1H6a1 1 0 01-1-1V7zm7 4h2a1 1 0 011 1v1a1 1 0 01-1 1h-2a1 1 0 01-1-1v-1a1 1 0 011-1zm-7 .5c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm.5 1.5h4a.5.5 0 010 1h-4a.5.5 0 010-1z" fill={primaryFill} /></svg>;
}

const ContentView20Filled = wrapIcon(rawSvg({}), 'ContentView20Filled');
export default ContentView20Filled;
      