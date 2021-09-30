import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.75 15.5a.75.75 0 01-.75-.75v-5.5a.75.75 0 011.5 0v5.5c0 .41-.34.75-.75.75z" fill={primaryFill} /><path d="M16.25 15.5a.75.75 0 01-.75-.75v-5.5a.75.75 0 011.5 0v5.5c0 .41-.34.75-.75.75z" fill={primaryFill} /><path d="M4 4.5v15A2.5 2.5 0 006.5 22h11a2.5 2.5 0 002.5-2.5v-15A2.5 2.5 0 0017.5 2h-11A2.5 2.5 0 004 4.5zm13-1h.5a1 1 0 011 1v15a1 1 0 01-1 1H17v-2.75a.75.75 0 00-1.5 0v2.75h-7v-2.75a.75.75 0 00-1.5 0v2.75h-.5a1 1 0 01-1-1v-15a1 1 0 011-1H7v2.75a.75.75 0 001.5 0V3.5h7v2.75a.75.75 0 001.5 0V3.5z" fill={primaryFill} /></svg>;
}

const DocumentMargins24Regular = wrapIcon(rawSvg({}), 'DocumentMargins24Regular');
export default DocumentMargins24Regular;
      