import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.13 14c-.35.41-.57.93-.62 1.5H4.25a.75.75 0 00-.75.74v.58c0 .54.2 1.06.54 1.46 1.18 1.38 2.98 2.12 5.47 2.2.05.58.27 1.1.62 1.52H10c-3.15 0-5.54-.9-7.1-2.74a3.75 3.75 0 01-.9-2.44v-.58c0-1.19.92-2.16 2.1-2.24h6.03zm4.62-2.5h3c.64 0 1.18.49 1.24 1.12v1.37h1.26c.96 0 1.75.79 1.75 1.76v4.5c0 .96-.79 1.75-1.75 1.75h-8c-.97 0-1.75-.79-1.75-1.75v-4.5c0-.97.78-1.75 1.75-1.75h1.25v-1.25c0-.65.49-1.18 1.12-1.25h3.13-3zm5.5 4h-8a.25.25 0 00-.25.25v4.5c0 .13.1.25.25.25h8c.13 0 .25-.12.25-.25v-4.5a.25.25 0 00-.25-.25zM17.5 13H15v1h2.5v-1zM10 2a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" fill={primaryFill} /></svg>;
}

const PersonAccounts24Regular = wrapIcon(rawSvg({}), 'PersonAccounts24Regular');
export default PersonAccounts24Regular;
      