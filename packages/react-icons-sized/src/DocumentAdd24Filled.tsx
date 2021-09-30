import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2v6c0 1.1.9 2 2 2h6v10a2 2 0 01-2 2h-6.81A6.5 6.5 0 004 11.5V4c0-1.1.9-2 2-2h6z" fill={primaryFill} /><path d="M13.5 2.5V8c0 .28.22.5.5.5h5.5l-6-6z" fill={primaryFill} /><path d="M12 17.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zM7 18v2.5a.5.5 0 11-1 0V18H3.5a.5.5 0 010-1H6v-2.5a.5.5 0 111 0V17h2.5a.5.5 0 010 1H7z" fill={primaryFill} /></svg>;
}

const DocumentAdd24Filled = wrapIcon(rawSvg({}), 'DocumentAdd24Filled');
export default DocumentAdd24Filled;
      