import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.94 6.08a9.96 9.96 0 00-.01 11.83l.23-.22A8.23 8.23 0 017 16.01a.75.75 0 11.48 1.42 6.73 6.73 0 00-2.58 1.62 9.97 9.97 0 0014.18 0 7.23 7.23 0 00-2.58-1.62.75.75 0 11.48-1.42 8.23 8.23 0 013.08 1.9 9.96 9.96 0 00-.01-11.83l-.22.2A8.23 8.23 0 0117 7.96a.75.75 0 01-.48-1.42 6.74 6.74 0 002.57-1.6 9.97 9.97 0 00-14.16 0 7.28 7.28 0 002.57 1.6A.75.75 0 117 7.96a8.23 8.23 0 01-3.07-1.88zm5.08 10.07c-.1-.4.15-.8.55-.9h.01l.02-.01a3.89 3.89 0 01.37-.08 12.54 12.54 0 014.42.07.75.75 0 01-.29 1.48 11.04 11.04 0 00-4.17-.01s-.75.1-.9-.55zm.91-8.88l.07.02a6.08 6.08 0 001.12.15c.76.06 1.82.06 2.98-.18a.75.75 0 01.3 1.48 12.54 12.54 0 01-4.8 0h-.02v-.01h-.01a.76.76 0 01-.55-.91c.16-.65.91-.55.91-.55z" fill={primaryFill} /></svg>;
}

const SportBaseball24Filled = wrapIcon(rawSvg({}), 'SportBaseball24Filled');
export default SportBaseball24Filled;
      