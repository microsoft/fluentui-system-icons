import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2v6c0 1.1.9 2 2 2h6v10a2 2 0 01-2 2H9v-3.67a4.5 4.5 0 00-5-7.07V4c0-1.1.9-2 2-2h6zm1.5.5V8c0 .28.22.5.5.5h5.5l-6-6zM9 15.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm-6 3.74v3.05c0 .63.76.95 1.21.5L5.5 21.5l1.29 1.3A.71.71 0 008 22.28v-3.05a4.48 4.48 0 01-5 0z" fill={primaryFill} /></svg>;
}

const DocumentRibbon24Filled = wrapIcon(rawSvg({}), 'DocumentRibbon24Filled');
export default DocumentRibbon24Filled;
      