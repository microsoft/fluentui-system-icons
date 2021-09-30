import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.52 6.25c0-.41.34-.75.75-.75h13.46c.41 0 .75.34.75.75v3.5c0 .41-.34.75-.75.75H5.27a.75.75 0 01-.75-.75v-3.5zm1.5.75v2h11.96V7H6.02z" fill={primaryFill} /><path d="M14.23 11.98a.75.75 0 00-.75.75v4.5c0 .41.34.75.75.75h4.5c.41 0 .75-.34.75-.75v-4.5a.75.75 0 00-.75-.75h-4.5zm.75 4.5v-3h3v3h-3z" fill={primaryFill} /><path d="M4.52 13.25c0-.41.34-.75.75-.75h5.98a.75.75 0 010 1.5H5.27a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M5.27 16a.75.75 0 000 1.5h5.98a.75.75 0 000-1.5H5.27z" fill={primaryFill} /><path d="M2 5.75A2.75 2.75 0 014.75 3h14.5A2.75 2.75 0 0122 5.75v12.5A2.75 2.75 0 0119.25 21H4.75A2.75 2.75 0 012 18.25V5.75zM4.75 4.5c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h14.5c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25H4.75z" fill={primaryFill} /></svg>;
}

const PreviewLink24Regular = wrapIcon(rawSvg({}), 'PreviewLink24Regular');
export default PreviewLink24Regular;
      