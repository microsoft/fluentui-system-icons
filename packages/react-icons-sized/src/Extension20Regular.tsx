import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.1 2c-1.07.08-1.94.9-2.08 1.94V4H6.35A1.5 1.5 0 005 5.5v2.27h-.06A2.25 2.25 0 003 10v.16c.08 1.06.9 1.93 1.94 2.07H5v2.42A1.5 1.5 0 006.5 16h2.02v.06A2.25 2.25 0 0010.75 18h.16a2.25 2.25 0 002.07-1.94V16h2.52c.83 0 1.5-.67 1.5-1.5v-3.25h-1.87A1.25 1.25 0 0114 10v-.12c.06-.63.6-1.13 1.25-1.13H17V5.36A1.5 1.5 0 0015.5 4h-2.02v-.06A2.25 2.25 0 0011.25 2h-.15zm.15 1c.69 0 1.25.56 1.25 1.25V5h3l.1.01a.5.5 0 01.4.5v2.24h-.75c-1.17 0-2.15.9-2.24 2.07l-.01.16c0 1.2.9 2.17 2.07 2.26l.16.01H16v2.25a.5.5 0 01-.5.5H12v.75a1.25 1.25 0 01-2.5 0V15h-3a.5.5 0 01-.5-.5v-3.25h-.75a1.25 1.25 0 010-2.5H6V5.5c0-.27.23-.5.5-.5H10v-.75c0-.69.56-1.25 1.25-1.25z" fill={primaryFill} /></svg>;
}

const Extension20Regular = wrapIcon(rawSvg({}), 'Extension20Regular');
export default Extension20Regular;
      