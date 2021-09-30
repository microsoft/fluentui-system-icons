import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2v4.5c0 .83.67 1.5 1.5 1.5H18v8.5c0 .83-.67 1.5-1.5 1.5H9.45l2.43-2.43A3.85 3.85 0 007 9.66a3.82 3.82 0 00-1-.49V3.5C6 2.67 6.67 2 7.5 2H12zm1 .25V6.5c0 .28.22.5.5.5h4.25L13 2.25zm-5.86 8.58A2.85 2.85 0 0112 13h-1.88l-.56-.56a1.5 1.5 0 00-2.26.16l-.16.22-.35-.6a1.5 1.5 0 00-2.54-.05L3.7 13H2a2.84 2.84 0 014.86-2.17l.14.14.14-.14zM3.97 16l2.68 2.68c.2.2.5.2.7 0L10.03 16H8.5l-.3.4a1.5 1.5 0 01-2.49-.13L5.55 16H3.97zm1.96-3.26a.5.5 0 00-.85-.02L4.23 14H3a.5.5 0 000 1h1.5a.5.5 0 00.42-.22l.56-.85 1.1 1.83a.5.5 0 00.82.04l1.15-1.54.6.6c.09.09.22.14.35.14H11a.5.5 0 000-1H9.7l-.85-.85a.5.5 0 00-.75.05l-1.05 1.4-1.12-1.86z" fill={primaryFill} /></svg>;
}

const DocumentHeartPulseFilled = wrapIcon(rawSvg({}), 'DocumentHeartPulseFilled');
export default DocumentHeartPulseFilled;
      