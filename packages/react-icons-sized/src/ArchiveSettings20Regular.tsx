import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 3.5c0-.83-.67-1.5-1.5-1.5h-13C2.67 2 2 2.67 2 3.5v2c0 .65.42 1.2 1 1.41v7.59A3.5 3.5 0 006.5 18h3.76a5.5 5.5 0 01-.66-1H6.5A2.5 2.5 0 014 14.5V7h12v2.2c.35.1.68.24 1 .4V6.91c.58-.2 1-.76 1-1.41v-2zM3.5 3h13c.28 0 .5.22.5.5v2a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5v-2c0-.28.22-.5.5-.5zm8.49 6.6a.5.5 0 00-.49-.6H8.41a.5.5 0 00.09 1h2.84c.2-.15.42-.28.65-.4zm-1.35 4.32a2 2 0 001.43-2.48l-.16-.55c.25-.2.53-.37.82-.5l.34.36a2 2 0 002.9 0l.33-.35c.3.14.58.32.84.52l-.13.42a2 2 0 001.46 2.52l.35.09a4.7 4.7 0 010 1.01l-.45.12a2 2 0 00-1.43 2.48l.15.55c-.25.2-.53.37-.82.5l-.34-.36a2 2 0 00-2.9 0l-.33.35c-.3-.14-.58-.32-.84-.52l.13-.42a2 2 0 00-1.46-2.52l-.35-.09a4.71 4.71 0 010-1.01l.46-.12zm4.86.58a1 1 0 10-2 0 1 1 0 002 0z" fill={primaryFill} /></svg>;
}

const ArchiveSettings20Regular = wrapIcon(rawSvg({}), 'ArchiveSettings20Regular');
export default ArchiveSettings20Regular;
      