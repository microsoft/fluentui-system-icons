import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.25 2c.41 0 .75.34.75.75V6h3.25a.75.75 0 010 1.5H22v3.25a.75.75 0 01-1.5 0V7.5h-3.25a.75.75 0 010-1.5h3.25V2.75c0-.41.34-.75.75-.75zM5.75 3A2.75 2.75 0 003 5.75v16.5A2.75 2.75 0 005.75 25h16.5A2.75 2.75 0 0025 22.25V16a2.75 2.75 0 00-2.75-2.75h-7.5v-7.5A2.75 2.75 0 0012 3H5.75zm7.5 10.25H4.5v-7.5c0-.69.56-1.25 1.25-1.25H12c.69 0 1.25.56 1.25 1.25v7.5zm1.5 10.25v-8.75h7.5c.69 0 1.25.56 1.25 1.25v6.25c0 .69-.56 1.25-1.25 1.25h-7.5zm-1.5 0h-7.5c-.69 0-1.25-.56-1.25-1.25v-7.5h8.75v8.75z" fill={primaryFill} /></svg>;
}

const AppsAddIn28Regular = wrapIcon(rawSvg({}), 'AppsAddIn28Regular');
export default AppsAddIn28Regular;
      