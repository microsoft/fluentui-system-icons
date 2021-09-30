import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22 12h-6a2 2 0 01-2-2V4H4a2 2 0 00-2 2v12c0 1.1.9 2 2 2h16a2 2 0 002-2v-6z" fill={primaryFill} /><path d="M21.5 10.5H16a.5.5 0 01-.5-.5V4.5l6 6z" fill={primaryFill} /></svg>;
}

const DocumentLandscape24Filled = wrapIcon(rawSvg({}), 'DocumentLandscape24Filled');
export default DocumentLandscape24Filled;
      