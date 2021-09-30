import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5.75A2.75 2.75 0 015.75 3h12.5A2.75 2.75 0 0121 5.75v4.6a4 4 0 00-1.5-1.06V5.75c0-.69-.56-1.25-1.25-1.25H5.75c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25H12c.03.54.15 1.04.37 1.5H5.75A2.75 2.75 0 013 18.25V5.75z" fill={primaryFill} /><path d="M18 14.5a1.5 1.5 0 010-3v.5h2.83a3 3 0 00-.6-1H18v-1a3 3 0 102.24 5H18v-.5z" fill={primaryFill} /><path d="M14.94 17c-.58 0-1.07.28-1.4.63-.32.35-.54.83-.54 1.31v.39c0 1.96 2.04 3.67 5 3.67v-1h3.47c.41-.29.75-.63 1-1H18v.5c-2.53 0-3.5-1.39-3.5-2.17v-.39a.5.5 0 01.14-.29c.11-.11.22-.15.3-.15H18V18h4.73a2.13 2.13 0 00-.27-.37 1.91 1.91 0 00-1.4-.63h-6.12z" fill={primaryFill} /><path d="M18 14v-1h3a3 3 0 01-.17 1H18z" fill={primaryFill} /><path d="M22.92 20H18v-1h5v.33c0 .23-.03.45-.08.67z" fill={primaryFill} /></svg>;
}

const TabInprivateAccount24Regular = wrapIcon(rawSvg({}), 'TabInprivateAccount24Regular');
export default TabInprivateAccount24Regular;
      