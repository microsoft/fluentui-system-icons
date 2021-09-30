import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.9 3.62a.75.75 0 01-1.28.79l-.02-.02a.64.64 0 00-.15-.12c-.15-.08-.47-.2-1.06-.09-.41.08-.62.33-.75.67a2.1 2.1 0 00-.14.65v1.25a1 1 0 001 1h.25a1 1 0 00.97-.75h-.47a.75.75 0 010-1.5h1.25c.41 0 .75.34.75.75v.5a2.5 2.5 0 01-2.5 2.5h-.25A2.5 2.5 0 018 6.75V5.46a2.57 2.57 0 01.03-.34c.03-.22.09-.5.2-.82.25-.62.8-1.4 1.88-1.6.92-.16 1.6 0 2.07.26a2.13 2.13 0 01.7.64l.01.01zm-8.17-.56a1 1 0 011.77.64v2.8h.25a.75.75 0 010 1.5H6.5v.5a.75.75 0 11-1.5 0V8H3.2a1.2 1.2 0 01-.92-1.96l2.45-2.98zM5 6.5V5.09L3.84 6.5H5zM20 6a1 1 0 011 1v13a1 1 0 01-2 0V7a1 1 0 011-1zm-4 3a1 1 0 011 1v10a1 1 0 01-2 0V10a1 1 0 011-1zm-4 3a1 1 0 011 1v7a1 1 0 11-2 0v-7a1 1 0 011-1zm-4 3a1 1 0 011 1v4a1 1 0 01-1 1 1 1 0 01-1-1v-4a1 1 0 011-1zm-4 3a1 1 0 011 .98v1.04A1 1 0 014 21a1 1 0 01-1-.98v-1.04A1 1 0 014 18z" fill={primaryFill} /></svg>;
}

const Cellular4G24Filled = wrapIcon(rawSvg({}), 'Cellular4G24Filled');
export default Cellular4G24Filled;
      