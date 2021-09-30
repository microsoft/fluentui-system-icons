import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 4.5C3 3.67 3.67 3 4.5 3h2a.5.5 0 000-1h-2A2.5 2.5 0 002 4.5v2a.5.5 0 001 0v-2zm14 11c0 .83-.67 1.5-1.5 1.5h-2a.5.5 0 000 1h2a2.5 2.5 0 002.5-2.5v-2a.5.5 0 00-1 0v2zM15.5 3c.83 0 1.5.67 1.5 1.5v2a.5.5 0 001 0v-2A2.5 2.5 0 0015.5 2h-2a.5.5 0 000 1h2zM3 15.5c0 .83.67 1.5 1.5 1.5h2a.5.5 0 010 1h-2A2.5 2.5 0 012 15.5v-2a.5.5 0 011 0v2zm8.15-10.95c-.83-.23-1.43.38-1.63.85-.15.36-.28.61-.45.94l-.37.71a4.98 4.98 0 01-1.04 1.43l-1.24.7a1.76 1.76 0 00-.8 2.18l.35.9c.2.51.65.9 1.18 1.06l3.61 1.08A2.2 2.2 0 0013.5 13l.92-3c.36-1.17-.56-2.3-1.77-2.3h-.28c.08-.34.14-.74.14-1.1-.01-.34-.04-.76-.23-1.15a1.68 1.68 0 00-1.13-.9zm-4.24 5.5l1.24-.7a.5.5 0 00.04-.02h.01v-.01l.02-.01.1-.08A5.97 5.97 0 009.6 7.5l.35-.69c.17-.32.32-.61.5-1.02.03-.08.1-.17.19-.23a.3.3 0 01.26-.04c.26.07.4.2.48.38.09.18.12.43.13.73 0 .28-.06.64-.15.99-.03.16-.08.31-.12.45a.5.5 0 00.48.65h.93c.6 0 .96.53.82 1l-.92 2.99a1.2 1.2 0 01-1.5.75l-3.61-1.09a.82.82 0 01-.54-.48L6.55 11a.76.76 0 01.36-.94z" fill={primaryFill} /></svg>;
}

const ScanThumbUp20Regular = wrapIcon(rawSvg({}), 'ScanThumbUp20Regular');
export default ScanThumbUp20Regular;
      