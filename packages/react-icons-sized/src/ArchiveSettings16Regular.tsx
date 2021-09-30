import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6a1 1 0 01-1-1V3a1 1 0 011-1h10a1 1 0 011 1v2a1 1 0 01-.52.88A5.47 5.47 0 0010.5 5H13V3H3v2h7.5c-1.18 0-2.27.37-3.16 1H4v6a1 1 0 001 1h.6c.18.36.4.7.66 1H5a2 2 0 01-2-2V6zm3.63 3.92a2 2 0 001.44-2.48L7.9 6.9c.25-.2.53-.37.82-.5l.34.36a2 2 0 002.9 0l.33-.35c.3.14.58.32.84.52l-.13.42a2 2 0 001.46 2.52l.35.09a4.7 4.7 0 010 1.01l-.45.12a2 2 0 00-1.43 2.48l.15.55c-.25.2-.53.37-.82.5l-.34-.36a2 2 0 00-2.9 0l-.33.35c-.3-.14-.58-.32-.84-.52l.13-.42a2 2 0 00-1.46-2.52l-.35-.09a4.7 4.7 0 010-1.01l.45-.12zm4.87.58a1 1 0 10-2 0 1 1 0 002 0z" fill={primaryFill} /></svg>;
}

const ArchiveSettings16Regular = wrapIcon(rawSvg({}), 'ArchiveSettings16Regular');
export default ArchiveSettings16Regular;
      