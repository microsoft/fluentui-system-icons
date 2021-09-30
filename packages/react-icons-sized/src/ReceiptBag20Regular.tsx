import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 4c0-1.1.9-2 2-2h7a2 2 0 012 2v7h3v2a3 3 0 01-3 3h-5v-1h4V4a1 1 0 00-1-1H6a1 1 0 00-1 1v4.17A3 3 0 004 8V4zm11 8v3a2 2 0 002-2v-1h-2zM7 5.5c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zM7.5 7a.5.5 0 000 1h4a.5.5 0 000-1h-4zM5 9.27A2 2 0 002 11v1h-.5a.5.5 0 00-.5.5V17c0 1.1.9 2 2 2h4a2 2 0 002-2v-4.5a.5.5 0 00-.5-.5H8v-1a2 2 0 00-3-1.73zM5 11v1H3v-1a1 1 0 112 0zm1 0a2 2 0 00-.25-.97A1 1 0 017 11v1H6v-1z" fill={primaryFill} /></svg>;
}

const ReceiptBag20Regular = wrapIcon(rawSvg({}), 'ReceiptBag20Regular');
export default ReceiptBag20Regular;
      