import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 2a2 2 0 00-2 2v12c0 1.1.9 2 2 2h4.26a5.5 5.5 0 01-.66-1H6a1 1 0 01-1-1V4a1 1 0 011-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v1.02c.34.03.68.1 1 .19V7.4c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0010.59 2H6zm8.8 5h-3.3a.5.5 0 01-.5-.5V3.2L14.8 7zM9 14.5c0-.17 0-.34.02-.5H8.5a.5.5 0 000 1h.52a5.57 5.57 0 01-.02-.5zm.2-1.5c.1-.35.24-.68.4-1H8.5a.5.5 0 000 1h.7zm1.06-2c.31-.38.67-.72 1.08-1H8.5a.5.5 0 000 1h1.76zM6.5 10a.5.5 0 100 1 .5.5 0 000-1zM6 12.5a.5.5 0 111 0 .5.5 0 01-1 0zm0 2a.5.5 0 111 0 .5.5 0 01-1 0zm13 0a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-3a.5.5 0 00-1 0v3c0 .28.22.5.5.5h2a.5.5 0 000-1H15v-2.5z" fill={primaryFill} /></svg>;
}

const DocumentBulletListClock20Regular = wrapIcon(rawSvg({}), 'DocumentBulletListClock20Regular');
export default DocumentBulletListClock20Regular;
      