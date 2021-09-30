import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 2h8a2 2 0 012 2v2.34A1.5 1.5 0 0015.02 8h-.52a1.5 1.5 0 000 3h.52a1.5 1.5 0 00.98 1.66V16a2 2 0 01-2 2H6a2 2 0 01-2-2v-3.34A1.5 1.5 0 004.98 11h.52a1.5 1.5 0 000-3h-.52A1.5 1.5 0 004 6.34V4c0-1.1.9-2 2-2z" fill={primaryFill} /><path d="M3.88 7.42a.5.5 0 01-.05.7l-1 .88H5.5a.5.5 0 110 1H2.83l1 .87a.5.5 0 01-.66.76l-2-1.75a.5.5 0 010-.76l2-1.75a.5.5 0 01.7.05z" fill={primaryFill} /><path d="M17.17 10l-1 .87a.5.5 0 00.66.76l2-1.75a.5.5 0 000-.76l-2-1.75a.5.5 0 00-.66.76l1 .87H14.5a.5.5 0 000 1h2.67z" fill={primaryFill} /></svg>;
}

const DocumentWidth20Filled = wrapIcon(rawSvg({}), 'DocumentWidth20Filled');
export default DocumentWidth20Filled;
      