import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 1a2 2 0 00-2 2v2.2c.32-.08.66-.15 1-.18V3a1 1 0 011-1h3v2.5c0 .83.67 1.5 1.5 1.5H13v7a1 1 0 01-1 1H9.74c-.31.38-.67.72-1.08 1H12a2 2 0 002-2V5.41c0-.4-.16-.78-.44-1.06l-2.91-2.91A1.5 1.5 0 009.59 1H6zm6.8 4h-2.3a.5.5 0 01-.5-.5V2.2L12.8 5zM1.62 9.92a2 2 0 001.43-2.48l-.15-.55c.25-.2.53-.37.82-.5l.34.36a2 2 0 002.9 0l.33-.35c.3.14.58.32.84.52L8 7.34a2 2 0 001.46 2.52l.35.09a4.7 4.7 0 010 1.01l-.45.12a2 2 0 00-1.44 2.48l.16.55c-.25.2-.53.37-.82.5l-.34-.36a2 2 0 00-2.9 0l-.33.35c-.3-.14-.58-.32-.84-.52l.13-.42a2 2 0 00-1.46-2.52l-.35-.09a4.7 4.7 0 010-1.01l.45-.12zm4.87.58a1 1 0 10-2 0 1 1 0 002 0z" fill={primaryFill} /></svg>;
}

const DocumentSettings16Regular = wrapIcon(rawSvg({}), 'DocumentSettings16Regular');
export default DocumentSettings16Regular;
      