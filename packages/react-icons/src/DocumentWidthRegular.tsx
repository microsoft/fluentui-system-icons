import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.88 7.42a.5.5 0 01-.05.7l-1 .88H5.5a.5.5 0 010 1H2.83l1 .88a.5.5 0 11-.66.75l-2-1.75a.5.5 0 010-.75l2-1.75a.5.5 0 01.7.04z" fill={primaryFill} /><path d="M17.17 10l-1 .88a.5.5 0 00.66.75l2-1.75a.5.5 0 000-.75l-2-1.75a.5.5 0 00-.66.75l1 .87H14.5a.5.5 0 000 1h2.67z" fill={primaryFill} /><path d="M5 4a1 1 0 011-1h8a1 1 0 011 1v3.5h.02A1.5 1.5 0 0116 6.34V4a2 2 0 00-2-2H6a2 2 0 00-2 2v2.34a1.5 1.5 0 01.98 1.16H5V4z" fill={primaryFill} /><path d="M4.63 12.24c.19-.22.3-.48.35-.74H5V16a1 1 0 001 1h8a1 1 0 001-1v-4.5h.02a1.5 1.5 0 00.98 1.16V16a2 2 0 01-2 2H6a2 2 0 01-2-2v-3.34c.24-.08.45-.22.63-.42z" fill={primaryFill} /></svg>;
}

const DocumentWidthRegular = wrapIcon(rawSvg({}), 'DocumentWidthRegular');
export default DocumentWidthRegular;
      