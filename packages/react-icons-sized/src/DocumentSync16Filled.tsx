import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 1v3.5c0 .83.67 1.5 1.5 1.5H14v7.5c0 .83-.67 1.5-1.5 1.5H8.66A5.5 5.5 0 004 5.2V2.5C4 1.67 4.67 1 5.5 1H9zm1 .25V4.5c0 .28.22.5.5.5h3.25L10 1.25zM5.5 15a4.5 4.5 0 110-9 4.5 4.5 0 010 9zM7 8v.15a3 3 0 00-3.62.48.5.5 0 00.7.7A2 2 0 016.48 9H6a.5.5 0 000 1h1.5a.5.5 0 00.5-.5V8a.5.5 0 00-1 0zm-1.55 5.25a3 3 0 002.17-.88.5.5 0 10-.7-.7 2 2 0 01-2.39.33H5a.5.5 0 000-1H3.5a.5.5 0 00-.5.5V13a.5.5 0 001 0v-.15a3.02 3.02 0 001.45.4z" fill={primaryFill} /></svg>;
}

const DocumentSync16Filled = wrapIcon(rawSvg({}), 'DocumentSync16Filled');
export default DocumentSync16Filled;
      