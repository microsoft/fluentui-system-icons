import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 2a1 1 0 00-1 1v1a1 1 0 001 1h10a1 1 0 001-1V3a1 1 0 00-1-1H3zm4.34 4a5.5 5.5 0 00-1.08 8H5a2 2 0 01-2-2V6h4.34zm-.7 3.92a2 2 0 001.43-2.48L7.9 6.9c.25-.2.53-.37.82-.5l.34.36a2 2 0 002.9 0l.33-.35c.3.14.58.32.84.52l-.13.42a2 2 0 001.46 2.52l.35.09a4.7 4.7 0 010 1.01l-.45.12a2 2 0 00-1.43 2.48l.15.55c-.25.2-.53.37-.82.5l-.34-.36a2 2 0 00-2.9 0l-.33.35c-.3-.14-.58-.32-.84-.52l.13-.42a2 2 0 00-1.46-2.52l-.35-.09a4.7 4.7 0 010-1.01l.45-.12zm4.86.58a1 1 0 10-2 0 1 1 0 002 0z" fill={primaryFill} /></svg>;
}

const ArchiveSettings16Filled = wrapIcon(rawSvg({}), 'ArchiveSettings16Filled');
export default ArchiveSettings16Filled;
      