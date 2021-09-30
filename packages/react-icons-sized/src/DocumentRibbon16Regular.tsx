import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 1a2 2 0 00-2 2v2.13A4 4 0 014 5V3a1 1 0 011-1h3v2.5C8 5.33 8.67 6 9.5 6H12v7a1 1 0 01-1 1H7v.75c0 .09 0 .17-.02.25H11a2 2 0 002-2V5.4c0-.4-.16-.78-.44-1.06L9.65 1.44A1.5 1.5 0 008.59 1H5zm6.8 4H9.5a.5.5 0 01-.5-.5V2.2L11.8 5zM7 9a3 3 0 11-6 0 3 3 0 016 0zm-1 3.46a3.98 3.98 0 01-4 0v2.29c0 .2.21.31.38.21L4 14l1.62.96c.17.1.38-.02.38-.21v-2.29z" fill={primaryFill} /></svg>;
}

const DocumentRibbon16Regular = wrapIcon(rawSvg({}), 'DocumentRibbon16Regular');
export default DocumentRibbon16Regular;
      