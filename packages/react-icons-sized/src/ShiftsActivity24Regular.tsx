import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.31 3.53a.75.75 0 10-.12-1.5 10 10 0 1010.78 10.78.75.75 0 10-1.5-.12 8.5 8.5 0 11-9.16-9.16z" fill={primaryFill} /><path d="M17.7 4.67a.75.75 0 011.06-.04c.21.2.42.4.61.61a.75.75 0 01-1.1 1.02 8.55 8.55 0 00-.53-.53.75.75 0 01-.04-1.06z" fill={primaryFill} /><path d="M11.25 6c.38 0 .7.28.74.65l.01.1V12h3.25a.75.75 0 01.1 1.5h-4.1a.75.75 0 01-.74-.65l-.01-.1v-6c0-.41.34-.75.75-.75z" fill={primaryFill} /><path d="M13.78 2.89c.11-.4.53-.63.93-.52.36.1.72.23 1.07.37a.75.75 0 11-.57 1.39c-.3-.12-.6-.23-.9-.32a.75.75 0 01-.53-.92z" fill={primaryFill} /><path d="M21.26 8.22a.75.75 0 10-1.39.56 8.4 8.4 0 01.31.92.75.75 0 101.45-.4 9.43 9.43 0 00-.37-1.08z" fill={primaryFill} /></svg>;
}

const ShiftsActivity24Regular = wrapIcon(rawSvg({}), 'ShiftsActivity24Regular');
export default ShiftsActivity24Regular;
      