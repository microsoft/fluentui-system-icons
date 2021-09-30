import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.75 18c.38 0 .7.28.74.65l.01.1v1.5a.75.75 0 01-1.5.1v-1.6c0-.41.34-.75.75-.75zm8-6c.38 0 .7.28.74.65l.01.1v5.16l-1.23 2.47c-.05.1-.1.2-.13.3a.75.75 0 01-.13-.33l-.01-.1v-7.5c0-.41.34-.75.75-.75zm3.51.38c.29-.57.73-.96 1.24-1.18V9.65a.75.75 0 00-1.5.1v3.16l.26-.53zm4.48 0l.75 1.52V6.74l-.02-.1a.74.74 0 00-.74-.64c-.4 0-.73.34-.73.76v4.74c.3.22.55.51.74.88zM7.75 15c.38 0 .7.28.74.65l.01.1v4.5a.75.75 0 01-1.5.1v-4.6c0-.42.34-.75.75-.75zm8.4-2.17l-3.99 8A1.5 1.5 0 0013.5 23h8a1.5 1.5 0 001.34-2.17l-4-8a1.5 1.5 0 00-2.68 0zM18 15.49v3a.5.5 0 11-1 0v-3a.5.5 0 011 0zm-.5 5.5a.5.5 0 110-1 .5.5 0 010 1z" fill={primaryFill} /></svg>;
}

const CellularDataUnavailable24Regular = wrapIcon(rawSvg({}), 'CellularDataUnavailable24Regular');
export default CellularDataUnavailable24Regular;
      