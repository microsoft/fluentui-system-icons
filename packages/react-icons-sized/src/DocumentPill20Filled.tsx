import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2v4.5c0 .83.67 1.5 1.5 1.5H16v.91a3.6 3.6 0 00-2.06 1.03l-4 4A3.62 3.62 0 009.2 18H5.5A1.5 1.5 0 014 16.5v-13C4 2.67 4.67 2 5.5 2H10zm1 .25V6.5c0 .28.22.5.5.5h4.25L11 2.25zm7.35 8.4a2.62 2.62 0 00-3.7 0l-4 4a2.62 2.62 0 003.7 3.7l4-4a2.62 2.62 0 000-3.7zm-3 .7a1.62 1.62 0 112.3 2.3L16 15.29 13.7 13l1.65-1.65zm-1.5 4.3c.2.2.2.5 0 .7l-1 1a.5.5 0 01-.7-.7l1-1c.2-.2.5-.2.7 0z" fill={primaryFill} /></svg>;
}

const DocumentPill20Filled = wrapIcon(rawSvg({}), 'DocumentPill20Filled');
export default DocumentPill20Filled;
      