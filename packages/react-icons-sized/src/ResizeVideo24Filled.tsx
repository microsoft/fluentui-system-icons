import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.25 13c.38 0 .7.28.74.65l.01.1v5a3.25 3.25 0 01-3.07 3.24l-.18.01h-4.67c.54-.39.98-.9 1.27-1.5h3.4c.92 0 1.67-.7 1.74-1.6l.01-.15v-5c0-.41.34-.75.75-.75zm-9.5-4c1.8 0 3.25 1.46 3.25 3.25v6.5c0 1.8-1.46 3.25-3.25 3.25h-6.5A3.25 3.25 0 012 18.75v-6.5C2 10.45 3.46 9 5.25 9h6.5zm-5.69 4.1a.5.5 0 00-.06.24v4.32a.5.5 0 00.74.44l3.96-2.16a.5.5 0 000-.88L6.74 12.9a.5.5 0 00-.68.2zM18.75 2a3.25 3.25 0 013.24 3.07l.01.18v5a.75.75 0 01-1.5.1v-5.1c0-.92-.7-1.67-1.6-1.74l-.15-.01h-5a.75.75 0 01-.1-1.5h5.1zm-8.5 0a.75.75 0 01.1 1.5h-5.1c-.92 0-1.67.7-1.74 1.6l-.01.15v3.4c-.6.3-1.11.73-1.5 1.27V5.25a3.25 3.25 0 013.07-3.24L5.25 2h5z" fill={primaryFill} /></svg>;
}

const ResizeVideo24Filled = wrapIcon(rawSvg({}), 'ResizeVideo24Filled');
export default ResizeVideo24Filled;
      