import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 3C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 17.75V6.25C3 4.45 4.46 3 6.25 3h11.5zm0 1.5H6.25c-.97 0-1.75.78-1.75 1.75v11.5c0 .97.78 1.75 1.75 1.75h11.5c.97 0 1.75-.78 1.75-1.75V6.25c0-.97-.78-1.75-1.75-1.75z" fill={primaryFill} /><path d="M13.25 8c.41 0 .75.34.75.75v2.75h1.5V8.75a.75.75 0 011.5 0v6.47a.75.75 0 01-1.5 0V13h-2.25a.75.75 0 01-.75-.75v-3.5c0-.41.34-.75.75-.75z" fill={primaryFill} /><path d="M7.5 8.74A2.3 2.3 0 019.25 8c1.15 0 1.9.8 2.15 1.66.26.85.1 1.9-.62 2.62-.24.25-.53.47-.79.67l-.04.03a7.8 7.8 0 00-.75.63 2.3 2.3 0 00-.58.89h2.13a.75.75 0 010 1.5h-3a.75.75 0 01-.75-.75c0-1.25.52-2.08 1.14-2.7.3-.3.62-.55.9-.76.28-.22.5-.4.68-.57.27-.27.37-.72.25-1.13-.12-.38-.37-.59-.72-.59s-.53.14-.64.25a.84.84 0 00-.15.23.75.75 0 01-1.43-.46l.04-.1.08-.17c.07-.14.18-.32.35-.5z" fill={primaryFill} /></svg>;
}

const ShiftsDay24Regular = wrapIcon(rawSvg({}), 'ShiftsDay24Regular');
export default ShiftsDay24Regular;
      