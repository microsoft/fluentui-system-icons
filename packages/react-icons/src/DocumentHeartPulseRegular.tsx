import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 2a2 2 0 00-2 2v5.17c.35.11.69.27 1 .48V4a1 1 0 011-1h4v3.5c0 .83.67 1.5 1.5 1.5H17v8a1 1 0 01-1 1h-5.55l-1 1H16a2 2 0 002-2V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0012.59 2H8zm8.8 5h-3.3a.5.5 0 01-.5-.5V3.2L16.8 7zM3.53 11.54c.72-.72 1.9-.72 2.62 0l.49.5c.2.19.51.19.7 0l.5-.5A1.85 1.85 0 0111 13h1a2.84 2.84 0 00-4.86-2.17l-.14.14-.13-.14A2.85 2.85 0 002 13h1c-.04-.52.14-1.06.54-1.46zM5.38 16H3.97l2.68 2.68a.5.5 0 00.7 0L10.05 16H8.62L7 17.62 5.38 16zm.57-3.72a.5.5 0 00-.9 0L4.2 14H3a.5.5 0 000 1h1.5a.5.5 0 00.45-.28l.55-1.1 1.06 2.1a.5.5 0 00.84.08l1.16-1.54.59.6c.1.09.22.14.35.14H11a.5.5 0 100-1H9.71l-.85-.85a.5.5 0 00-.76.05L7.1 14.55l-1.14-2.27z" fill={primaryFill} /></svg>;
}

const DocumentHeartPulseRegular = wrapIcon(rawSvg({}), 'DocumentHeartPulseRegular');
export default DocumentHeartPulseRegular;
      