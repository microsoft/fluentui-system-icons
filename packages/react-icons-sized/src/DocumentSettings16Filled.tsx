import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 1v3.5c0 .83.67 1.5 1.5 1.5H14v7.5c0 .83-.67 1.5-1.5 1.5H8.66A5.5 5.5 0 004 5.2V2.5C4 1.67 4.67 1 5.5 1H9zm1 .25V4.5c0 .28.22.5.5.5h3.25L10 1.25zM1.63 9.92a2 2 0 001.43-2.48l-.15-.55c.25-.2.53-.37.82-.5l.34.36a2 2 0 002.9 0l.33-.35c.3.14.58.32.84.52L8 7.34a2 2 0 001.46 2.52l.35.09a4.7 4.7 0 010 1.01l-.45.12a2 2 0 00-1.44 2.48l.16.55c-.25.2-.53.37-.82.5l-.34-.36a2 2 0 00-2.9 0l-.33.35c-.3-.14-.58-.32-.84-.52l.13-.42a2 2 0 00-1.46-2.52l-.35-.09a4.7 4.7 0 010-1.01l.45-.12zm4.87.58a1 1 0 10-2 0 1 1 0 002 0z" fill={primaryFill} /></svg>;
}

const DocumentSettings16Filled = wrapIcon(rawSvg({}), 'DocumentSettings16Filled');
export default DocumentSettings16Filled;
      