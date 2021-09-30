import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 2A2.5 2.5 0 004 4.5v15A2.5 2.5 0 006.5 22H7v-3.25a.75.75 0 011.5 0V22h7v-3.25a.75.75 0 011.5 0V22h.5a2.5 2.5 0 002.5-2.5v-15A2.5 2.5 0 0017.5 2H17v3.25a.75.75 0 01-1.5 0V2h-7v3.25a.75.75 0 01-1.5 0V2h-.5zm1.25 14.5a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5c0 .41-.34.75-.75.75zm8.5 0a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5c0 .41-.34.75-.75.75z" fill={primaryFill} /></svg>;
}

const DocumentMargins24Filled = wrapIcon(rawSvg({}), 'DocumentMargins24Filled');
export default DocumentMargins24Filled;
      