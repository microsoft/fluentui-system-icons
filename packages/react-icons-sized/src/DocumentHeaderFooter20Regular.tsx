import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 5a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm0 10a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zM6 2a2 2 0 00-2 2v12c0 1.1.9 2 2 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm8 1a1 1 0 011 1v12a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1h8z" fill={primaryFill} /></svg>;
}

const DocumentHeaderFooter20Regular = wrapIcon(rawSvg({}), 'DocumentHeaderFooter20Regular');
export default DocumentHeaderFooter20Regular;
      