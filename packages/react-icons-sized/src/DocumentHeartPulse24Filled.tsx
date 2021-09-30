import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2v6c0 1.1.9 2 2 2h6v10.5c0 .83-.67 1.5-1.5 1.5H9.73l2.58-2.58.02-.02.34-.34a4.6 4.6 0 00-5.63-7.2c-.92-.58-2-.8-3.04-.66V3.5C4 2.67 4.67 2 5.5 2H12zm1.5.5V8c0 .28.22.5.5.5h5.5l-6-6zM2.06 13.22a3.6 3.6 0 014.97-.12 3.6 3.6 0 015.99 2.9h-2.05l-.73-.74a1.75 1.75 0 00-2.55.08l-.5.55-.73-1.11a1.75 1.75 0 00-3.03.19L2.92 16h-1.9a3.6 3.6 0 011.04-2.78zm1.19 6.28l3.25 3.25a.75.75 0 001.06 0l3.26-3.25H8.67l-.36.41a1.75 1.75 0 01-2.77-.19l-.14-.22H3.25zm2.37-4.17a.75.75 0 00-1.3.08L3.55 17H1.75a.75.75 0 000 1.5H4c.28 0 .54-.16.67-.41l.42-.85 1.29 1.93a.75.75 0 001.18.08l1.47-1.66.69.69c.14.14.33.22.53.22h2a.75.75 0 000-1.5h-1.69l-1.03-1.03a.75.75 0 00-1.1.03L7.1 17.53l-1.47-2.2z" fill={primaryFill} /></svg>;
}

const DocumentHeartPulse24Filled = wrapIcon(rawSvg({}), 'DocumentHeartPulse24Filled');
export default DocumentHeartPulse24Filled;
      