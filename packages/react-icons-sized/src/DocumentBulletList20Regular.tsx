import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 10.5a.5.5 0 111 0 .5.5 0 01-1 0zm.5 1.5a.5.5 0 100 1 .5.5 0 000-1zM6 14.5a.5.5 0 111 0 .5.5 0 01-1 0zM8.5 10a.5.5 0 000 1h5a.5.5 0 000-1h-5zM8 12.5c0-.28.22-.5.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm.5 1.5a.5.5 0 000 1h5a.5.5 0 000-1h-5zM6 2a2 2 0 00-2 2v12c0 1.1.9 2 2 2h8a2 2 0 002-2V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0010.59 2H6zM5 4a1 1 0 011-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v8a1 1 0 01-1 1H6a1 1 0 01-1-1V4zm9.8 3h-3.3a.5.5 0 01-.5-.5V3.2L14.8 7z" fill={primaryFill} /></svg>;
}

const DocumentBulletList20Regular = wrapIcon(rawSvg({}), 'DocumentBulletList20Regular');
export default DocumentBulletList20Regular;
      