import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M25 14.75V5h-6.75A4.25 4.25 0 0014 9.25v24.5C14 36.1 15.9 38 18.25 38h16.5C37.1 38 39 36.1 39 33.75V19h-9.75A4.25 4.25 0 0125 14.75z" fill={primaryFill} /><path d="M27.5 14.75V5.5l11 11h-9.25c-.97 0-1.75-.78-1.75-1.75z" fill={primaryFill} /><path d="M9 13.7a4 4 0 012.5-3.7v23.75a6.75 6.75 0 006.75 6.75h15.76A4 4 0 0130.3 43H18.25A9.25 9.25 0 019 33.75V13.7z" fill={primaryFill} /></svg>;
}

const DocumentCopy48Filled = wrapIcon(rawSvg({}), 'DocumentCopy48Filled');
export default DocumentCopy48Filled;
      